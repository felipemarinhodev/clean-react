import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httppostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httppostClientSpy)
    await sut.auth()
    expect(httppostClientSpy.url).toBe(url)
  })
})
