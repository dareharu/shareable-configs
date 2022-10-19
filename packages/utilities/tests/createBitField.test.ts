import { createBitField } from '../src/lib/createBitField'

/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/no-magic-numbers */
describe('createBitField', () => {
  test('should match', () => {
    const Group = createBitField(['Administrator', 'Moderator', 'Member', 'User', 'Guest'])

    expect(Group.Administrator).toBe(1)
    expect(Group.Moderator).toBe(2)
    expect(Group.Member).toBe(4)
    expect(Group.User).toBe(8)
    expect(Group.Guest).toBe(16)
  })
})
