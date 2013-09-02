quiztastic
==========

Quiztastic is an angular module that lets you create a simple interactive quiz simply by using a single HTML5 "quiz" tag. It accepts a single parameter: a URL to a quiz specification in JSON.

`
{ 
  questions: [ 
    { "question": "What is the meaning of life?", 
      "options": ["42", "41", "40.5"],  
      "answer": 0, 
      "explanation": "It just is."
    }
  ]
}
`

It creates an interactive quiz that simply shows whether the person is correct or wrong.
CSS transforms are used and since this uses AngularJS you probably want a modern browser.

<3 eMax
