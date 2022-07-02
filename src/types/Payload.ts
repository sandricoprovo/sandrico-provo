export interface Payload<Key extends string, Type> {
    data: Record<Key, Type>;
}
