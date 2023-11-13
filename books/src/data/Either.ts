export type Either<a, b> = {
    kind: 'a',
    value: a
} | {
    kind: 'b',
    value: b
}

export const ThisIsA = <a, b>(v: a): Either<a, b> => ({kind: 'a', value: v})
export const ThisIsB = <a, b>(v: b): Either<a, b> => ({kind: 'b', value: v})