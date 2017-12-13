
const MAXLEN = 32;

// take note to specify the port
const socket = io.connect('http://localhost:31337');
let tserie = new Array(MAXLEN).fill(0);

// get margins from there, that's all
let svg = d3.select("svg");
let margin = {top: 20, right: 20, bottom: 30, left: 50};

let width = +svg.attr("width") - margin.left - margin.right,
height = +svg.attr("height") - margin.top - margin.bottom;

// these are scales that translate domains (source data) into
// range (destination data). without specific data these are 
// simply functions that MAP data into data... 
// in the context of width/height and gfx, we'd like to have
// these keep our data always scaled (mapped) into the screen
var x = d3.scaleLinear().domain([0, MAXLEN]).range([0, width]),
    y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

// let's have a group of items and have them all translated
// into the 
let g = svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// these are axis. ready-made d3 goodies
// please note that we request d3.axisBottom(x))
// an axis based on our scale
// thus - we can change the scale and update the axis
g.append("g")
  .attr("class", "axis axis--x")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

g.append("g")
  .attr("class", "axis axis--y")
  .attr("transform", "translate(0,0)")
  .call(d3.axisLeft(y));

function update() {  
  const sel = g.selectAll(".bar");
  // this relates to operations for the
  // newly arrived data. in our case 
  // this will get called exactly once
  // becacause we don't change the length
  // of data
  sel.data(tserie)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d))
      .attr("width", width/ MAXLEN)
      .attr("height", function(d) { return height - y(d); });

  // now, once data is bound { ref data(tserie) }, 
  // we need only update the relevant properties
  sel.transition(300)
      .attr("x", (d, i) => x(i))
     .attr("y", (d) => y(d))
     .attr("height", function(d) { return height - y(d); });
  
  sel.exit().remove();
}
  
let initStream = function() {
    socket.on('DATA', function (data) {
      let svg = d3.select("svg");
      document.querySelector('#lastdata').innerHTML = data;
      tserie.push(data);
      tserie = tserie.splice(1);  // keep the arry with same number of elems
      update();
    })
}

initStream();
