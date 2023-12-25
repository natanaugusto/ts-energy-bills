import request from 'supertest'
import { HttpStatusCode } from '@/enums'
import { app, server } from '@/main'

afterAll(async () => {
  if (server !== undefined) {
    server.close()
  }
})

describe('Health Check Endpoint', () => {
  it('should return a healthy response', async () => {
    const response = await request(app).get('/health')
    expect(response.status).toBe(HttpStatusCode.NO_CONTENT)
  })
})
