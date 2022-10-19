/* eslint-disable @typescript-eslint/no-magic-numbers */

/**
 * Converts the given array to a bitfield object.
 *
 * @param {string[]} keys The array to convert onto a bitfield object
 * @since 0.2.0
 * @example
 * ```typescript
 * const Group = createBitField(['Administrator', 'Moderator', 'Member', 'User', 'Guest']);
 *
 * assert.equal(Group.Administrator, 1);
 * assert.equal(Group.Moderator, 2);
 * assert.equal(Group.Member, 4);
 * assert.equal(Group.User, 8);
 * assert.equal(Group.Guest, 16);
 * ```
 */
export function createBitField<T extends string>(
  keys: T[]
): Readonly<{
  [P in T]: number
}> {
  let bit = 0

  return Object.freeze(
    keys.reduce<any>(
      (acc, key) => ({
        ...acc,
        [key]: 1 << bit++
      }),
      {}
    )
  )
}
