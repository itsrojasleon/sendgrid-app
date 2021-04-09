const request = require('supertest');
const app = require('../../app');

it('Can send emails with valid inputs', async () => {
  return request(app)
    .post('/api/mail')
    .send({
      to: 'luisrojasleon5@gmail.com',
      subject: 'Subject',
      text: 'some random text',
      html: '<strong>Some random html code</strong>',
      sandboxMode: true
    })
    .expect(201);
});

it('Returns a 400 status code with invalid credentials', async () => {
  return request(app)
    .post('/api/mail')
    .send({
      to: '',
      subject: '',
      text: 'some random text',
      html: '<strong>Some random html code</strong>',
      sandboxMode: true
    })
    .expect(400);
});
