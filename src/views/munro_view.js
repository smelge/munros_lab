const PubSub = require('../helpers/pubsub.js');

const MunroView = function(container){
  this.container = container;
}

MunroView.prototype.bindEvents = function(){
  PubSub.subscribe('Munro_Data:munro-data-ready',(evt)=>{
    const munro = evt.detail;
    // console.log('Munros: ',munro);
    munro.forEach((munroData,index)=>{
      // console.log(munroData.name)
      this.render(munroData,index);
    });
  });
}

MunroView.prototype.render = function(munro,index){
  // const munroContainer = document.createElement('div');
  // munroContainer.setAttribute('id',munro.name);
  // this.container.appendChild(munroContainer);
  // var div = document.getElementById(munro.name);
  //
  // const munroName = document.createElement('h2');
  // munroName.textContent = munro.name;
  // div.appendChild(munroName);
  //
  // const munroList = document.createElement('ul');
  // munroList.setAttribute('id',munro.gridref_northings);
  // div.appendChild(munroList);
  // var ul = document.getElementById(munro.gridref_northings);
  // const munroHeight = document.createElement('li');
  // munroHeight.textContent = `Height: ${munro.height}m`;
  // ul.appendChild(munroHeight);
  // const munroMeaning = document.createElement('li');
  // munroMeaning.textContent = `Meaning: ${munro.meaning}`;
  // ul.appendChild(munroMeaning);

}


module.exports = MunroView;
