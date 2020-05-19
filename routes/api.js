const router = require('express').Router();
const manager = require('./nlp');

function getChoices(classification) {
  switch (classification) {
    case 'questions.resume':
      return [
        'Projects',
        'Work Experiences',
        'Linkedin',
        'Github',
        'Resume',
      ];
    default:
      return [
        'How do I pronounce your name?',
        'Projects',
        'Work Experiences',
        'Linkedin',
        'Github',
        'Resume'
      ];
  };
}

router.post('/message', async (req, res, next) => {
  let response;
  await (async() => {
      response = await manager.process('en', req.body.message);
  })();

  const classification = response.classifications[0].label;
  console.log('classification', response.classifications[0].label);

  res.status(200).json({
    author: 'bot',
    type: 'text',
    payload: response.answer,
    time: new Date().toISOString(),
    choices: getChoices(classification)
  }).end();
});

module.exports = router;
