const brain = require('brain.js');

module.exports = {
    getContrast: (req,res)=>{
      let rColor = (req.body.colorOneR/255).toFixed(2)
      let gColor = (req.body.colorOneG/225).toFixed(2)
      let bColor = (req.body.colorOneB/225).toFixed(2)
      let colorOne = `r:${rColor},g:${gColor},b:${bColor}`

      const network = new brain.NeuralNetwork();
      network.train([
        {input: {r:0.62,g:0.72,b:0.88}, output:{light: 1}},
        {input: {r:0.1,g:0.84,b:0.72}, output:{light: 1}},
        {input: {r:0.33,g:0.24,b:0.29}, output:{dark: 1}},
        {input: {r:0.74,g:0.78,b:0.86}, output:{light: 1}},
        ]);

      const contrast = brain.likely({colorOne}, network) // string
      const results = network.run({ colorOne }) // obj
      const light = Number((results.light*100).toFixed(2)) // number
      const dark = Number((results.dark*100).toFixed(2)) // number
      let percentage = (dark > light) ? dark : light

      res.render('results.ejs', {contrast: contrast, percentage: percentage})
    }
}
