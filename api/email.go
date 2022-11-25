package handler

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/microcosm-cc/bluemonday"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

type Email struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

func createBody(e Email) []byte {
	// Creates a sanitization policy
	p := bluemonday.StrictPolicy()

	// TODO: Add users email and name to email content

	// Sanitizes inputs
	// senderEmail := p.Sanitize(e.Email)
	// senderName := p.Sanitize(e.Name)
	subject := p.Sanitize(e.Subject)
	message := p.Sanitize(e.Message)

	// Crafts email
	from := mail.NewEmail("Portfolio Contact Form", os.Getenv("SENDER_EMAIL"))
	to := mail.NewEmail("Sandrico Provo", os.Getenv("RECEIVER_EMAIL"))
	content := mail.NewContent("text/plain", message)
	m := mail.NewV3MailInit(from, subject, to, content)

	return mail.GetRequestBody(m)
}

func Handler(w http.ResponseWriter, r *http.Request) {
	var e Email

	// Converts response body into readable format.
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Fatalf("The request body couldn't be parsed.")
	}

	// Decodes the email in variable e while checking for errors.
	if err := json.Unmarshal(body, &e); err != nil {
		log.Fatalf("The JSON couldn't be decoded.")
	}

	// Sends email using SendGrid
	request := sendgrid.GetRequest(os.Getenv("SENDGRID_API_KEY"), "/v3/mail/send", "https://api.sendgrid.com")
	request.Method = "POST"
	var Body = createBody(e)
	request.Body = Body
	response, err := sendgrid.API(request)

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(response.StatusCode)
		fmt.Println(response.Body)
		fmt.Println(response.Headers)
	}

}
