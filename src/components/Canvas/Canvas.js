var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var DrawableCanvas = React.createClass({ displayName: "DrawableCanvas",
  propTypes: {
    brushColor: PropTypes.string,
    lineWidth: PropTypes.number,
    canvasStyle: PropTypes.shape({
      backgroundColor: PropTypes.string,
      cursor: PropTypes.string
    }),
    clear: PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      brushColor: '#000000',
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: '#FFFFFF',
        cursor: 'pointer'
      },
      clear: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      canvas: null,
      context: null,
      drawing: false,
      lastX: 0,
      lastY: 0,
      history: []
    };
  },
  componentDidMount: function componentDidMount() {
    var canvas = ReactDOM.findDOMNode(this);

    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    var ctx = canvas.getContext('2d');

    this.setState({
      canvas: canvas,
      context: ctx
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.clear) {
      this.resetCanvas();
    }
  },
  handleOnMouseDown: function handleOnMouseDown(e) {
    var rect = this.state.canvas.getBoundingClientRect();
    this.state.context.beginPath();
    if (this.isMobile()) {
      this.setState({
        lastX: e.targetTouches[0].pageX - rect.left,
        lastY: e.targetTouches[0].pageY - rect.top
      });
    } else {
      this.setState({
        lastX: e.clientX - rect.left,
        lastY: e.clientY - rect.top
      });
    }

    this.setState({
      drawing: true
    });
  },
  handleOnMouseMove: function handleOnMouseMove(e) {

    if (this.state.drawing) {
      var rect = this.state.canvas.getBoundingClientRect();
      var lastX = this.state.lastX;
      var lastY = this.state.lastY;
      var currentX = void 0;
      var currentY = void 0;
      if (this.isMobile()) {
        currentX = e.targetTouches[0].pageX - rect.left;
        currentY = e.targetTouches[0].pageY - rect.top;
      } else {
        currentX = e.clientX - rect.left;
        currentY = e.clientY - rect.top;
      }

      this.draw(lastX, lastY, currentX, currentY);
      this.setState({
        lastX: currentX,
        lastY: currentY
      });
    }
  },
  handleonMouseUp: function handleonMouseUp() {
    this.setState({
      drawing: false
    });
  },
  draw: function draw(lX, lY, cX, cY) {
    this.state.context.strokeStyle = this.props.brushColor;
    this.state.context.lineWidth = this.props.lineWidth;
    this.state.context.moveTo(lX, lY);
    this.state.context.lineTo(cX, cY);
    this.state.context.stroke();
  },
  resetCanvas: function resetCanvas() {
    var width = this.state.context.canvas.width;
    var height = this.state.context.canvas.height;
    this.state.context.clearRect(0, 0, width, height);
  },
  getDefaultStyle: function getDefaultStyle() {
    return {
      backgroundColor: '#FFFFFF',
      cursor: 'pointer'
    };
  },
  canvasStyle: function canvasStyle() {
    var defaults = this.getDefaultStyle();
    var custom = this.props.canvasStyle;
    return Object.assign({}, defaults, custom);
  },
  isMobile: function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    }
    return false;
  },
  render: function render() {
    return React.createElement("canvas", { style: this.canvasStyle(),
      onMouseDown: this.handleOnMouseDown,
      onTouchStart: this.handleOnMouseDown,
      onMouseMove: this.handleOnMouseMove,
      onTouchMove: this.handleOnMouseMove,
      onMouseUp: this.handleonMouseUp,
      onTouchEnd: this.handleonMouseUp
    });
  }
});

module.exports = DrawableCanvas;
