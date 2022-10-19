import { keyMirror } from '../src/lib/keyMirror'

/* eslint-disable @typescript-eslint/naming-convention */
describe('keyMirror', () => {
  test('should match without any options', () => {
    const ConnectionKind = keyMirror(['TCP', 'UDP'])

    expect(ConnectionKind.TCP).toBe('TCP')
    expect(ConnectionKind.UDP).toBe('UDP')
  })

  test('should match with prefix option', () => {
    const ResponseType = {
      ...keyMirror(['Create', 'Update', 'Delete'], { prefix: 'Message' }),
      ...keyMirror(['Create', 'Update', 'Delete'], { prefix: 'Channel' })
    }

    expect(ResponseType.ChannelCreate, 'ChannelCreate')
    expect(ResponseType.ChannelDelete, 'ChannelDelete')
    expect(ResponseType.ChannelUpdate, 'ChannelUpdate')
    expect(ResponseType.MessageCreate, 'MessageCreate')
    expect(ResponseType.MessageDelete, 'MessageDelete')
    expect(ResponseType.MessageUpdate, 'MessageUpdate')
  })

  test('should match with suffix option', () => {
    const ResponseType = {
      ...keyMirror(['Channel', 'Message'], { suffix: 'Create' }),
      ...keyMirror(['Channel', 'Message'], { suffix: 'Delete' }),
      ...keyMirror(['Channel', 'Message'], { suffix: 'Update' })
    }

    expect(ResponseType.ChannelCreate, 'ChannelCreate')
    expect(ResponseType.ChannelDelete, 'ChannelDelete')
    expect(ResponseType.ChannelUpdate, 'ChannelUpdate')
    expect(ResponseType.MessageCreate, 'MessageCreate')
    expect(ResponseType.MessageDelete, 'MessageDelete')
    expect(ResponseType.MessageUpdate, 'MessageUpdate')
  })

  test('should match with full option', () => {
    const ResponseType = {
      ...keyMirror(['Channel', 'Message'], { prefix: 'Haru', suffix: 'Create' }),
      ...keyMirror(['Channel', 'Message'], { prefix: 'Haru', suffix: 'Delete' }),
      ...keyMirror(['Channel', 'Message'], { prefix: 'Haru', suffix: 'Update' })
    }

    expect(ResponseType.HaruChannelCreate, 'HaruChannelCreate')
    expect(ResponseType.HaruChannelDelete, 'HaruChannelDelete')
    expect(ResponseType.HaruChannelUpdate, 'HaruChannelUpdate')
    expect(ResponseType.HaruMessageCreate, 'HaruMessageCreate')
    expect(ResponseType.HaruMessageDelete, 'HaruMessageDelete')
    expect(ResponseType.HaruMessageUpdate, 'HaruMessageUpdate')
  })
})
