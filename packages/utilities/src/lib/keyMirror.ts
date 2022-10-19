/**
 * Creates a new object that assigned each value of the given array into property key and value.
 *
 * @param {string[]} keys The array to assign each value into property key and value
 * @since 0.1.0
 * @example
 * ```typescript
 * const ChatInputId = keyMirror(['Ticket', 'Message']);
 *
 * assert.equal(ChatInputId.Ticket, 'Ticket');
 * assert.equal(ChatInputId.Message, 'Message');
 * ```
 * @example
 * ```typescript
 * const PropertyId = {
 *   ...keyMirror(['Create', 'Delete'], 'Ticket'),
 *   ...keyMirror(['Send', 'Receive'], 'Message')
 * };
 *
 * assert.equal(PropertyId.TicketCreate, 'TicketCreate');
 * assert.equal(PropertyId.TicketDelete, 'TicketDelete');
 * assert.equal(PropertyId.MessageSend, 'MessageSend');
 * assert.equal(PropertyId.MessageReceive, 'MessageReceive');
 * ```
 */
export function keyMirror<
  T extends ReadonlyArray<string>,
  Prefix extends string = '',
  Suffix extends string = ''
>(
  keys: Readonly<T> | [...T],
  { prefix = '' as Prefix, suffix = '' as Suffix }: Partial<{ prefix: Prefix; suffix: Suffix }> = {
    prefix: '' as Prefix,
    suffix: '' as Suffix
  }
): Readonly<{ [P in T[number] as `${Prefix}${P}${Suffix}`]: `${Prefix}${P}${Suffix}` }> {
  return Object.freeze(
    (keys as T).reduce<any>(
      (acc, key) => ({
        ...acc,
        [prefix + key + suffix]: prefix + key + suffix
      }),
      {}
    )
  )
}
