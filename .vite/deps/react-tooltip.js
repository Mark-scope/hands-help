import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS,
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames() {
        var classes = [];
        for (var i2 = 0; i2 < arguments.length; i2++) {
          var arg = arguments[i2];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/react-tooltip/dist/react-tooltip.min.mjs
var import_react = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x2,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn
    } = validMiddleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x2,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX != null ? nextX : x2;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x2,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
      continue;
    }
  }
  return {
    x: x2,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x2,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x: x2,
    y: y2
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x2,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x2,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b2) => a.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b2) => a[1] - b2[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x2 + diffCoords.x,
        y: y2 + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x3,
              y: y3
            } = _ref;
            return {
              x: x3,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y2
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x2,
          y: limitedCoords.y - y2
        }
      };
    }
  };
};

// node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x2 = ($2 ? round(rect.width) : rect.width) / width;
  let y2 = ($2 ? round(rect.height) : rect.height) / height;
  if (!x2 || !Number.isFinite(x2)) {
    x2 = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x: x2,
    y: y2
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x2 = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x2 += left;
      y2 += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y2
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x2 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x2 = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x2 = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e2) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/react-tooltip/dist/react-tooltip.min.mjs
var import_classnames = __toESM(require_classnames(), 1);
var y = "react-tooltip-core-styles";
var h = "react-tooltip-base-styles";
var w = { core: false, base: false };
function b({ css: e2, id: t2 = h, type: o2 = "base", ref: r2 }) {
  var l2, n2;
  if (!e2 || "undefined" == typeof document || w[o2])
    return;
  if ("core" === o2 && "undefined" != typeof process && (null === (l2 = null === process || void 0 === process ? void 0 : process.env) || void 0 === l2 ? void 0 : l2.REACT_TOOLTIP_DISABLE_CORE_STYLES))
    return;
  if ("base" !== o2 && "undefined" != typeof process && (null === (n2 = null === process || void 0 === process ? void 0 : process.env) || void 0 === n2 ? void 0 : n2.REACT_TOOLTIP_DISABLE_BASE_STYLES))
    return;
  "core" === o2 && (t2 = y), r2 || (r2 = {});
  const { insertAt: c2 } = r2;
  if (document.getElementById(t2))
    return void console.warn(`[react-tooltip] Element with id '${t2}' already exists. Call \`removeStyle()\` first`);
  const i2 = document.head || document.getElementsByTagName("head")[0], s2 = document.createElement("style");
  s2.id = t2, s2.type = "text/css", "top" === c2 && i2.firstChild ? i2.insertBefore(s2, i2.firstChild) : i2.appendChild(s2), s2.styleSheet ? s2.styleSheet.cssText = e2 : s2.appendChild(document.createTextNode(e2)), w[o2] = true;
}
function E({ type: e2 = "base", id: t2 = h } = {}) {
  if (!w[e2])
    return;
  "core" === e2 && (t2 = y);
  const o2 = document.getElementById(t2);
  "style" === (null == o2 ? void 0 : o2.tagName) ? null == o2 || o2.remove() : console.warn(`[react-tooltip] Failed to remove 'style' element with id '${t2}'. Call \`injectStyle()\` first`), w[e2] = false;
}
var S = (e2, t2, o2) => {
  let r2 = null;
  return function(...l2) {
    const n2 = () => {
      r2 = null, o2 || e2.apply(this, l2);
    };
    o2 && !r2 && (e2.apply(this, l2), r2 = setTimeout(n2, t2)), o2 || (r2 && clearTimeout(r2), r2 = setTimeout(n2, t2));
  };
};
var g = "DEFAULT_TOOLTIP_ID";
var _ = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} };
var A = (0, import_react.createContext)({ getTooltipData: () => _ });
var T = ({ children: t2 }) => {
  const [n2, c2] = (0, import_react.useState)({ [g]: /* @__PURE__ */ new Set() }), [i2, s2] = (0, import_react.useState)({ [g]: { current: null } }), a = (e2, ...t3) => {
    c2((o2) => {
      var r2;
      const l2 = null !== (r2 = o2[e2]) && void 0 !== r2 ? r2 : /* @__PURE__ */ new Set();
      return t3.forEach((e3) => l2.add(e3)), { ...o2, [e2]: new Set(l2) };
    });
  }, u = (e2, ...t3) => {
    c2((o2) => {
      const r2 = o2[e2];
      return r2 ? (t3.forEach((e3) => r2.delete(e3)), { ...o2 }) : o2;
    });
  }, d = (0, import_react.useCallback)((e2 = g) => {
    var t3, o2;
    return { anchorRefs: null !== (t3 = n2[e2]) && void 0 !== t3 ? t3 : /* @__PURE__ */ new Set(), activeAnchor: null !== (o2 = i2[e2]) && void 0 !== o2 ? o2 : { current: null }, attach: (...t4) => a(e2, ...t4), detach: (...t4) => u(e2, ...t4), setActiveAnchor: (t4) => ((e3, t5) => {
      s2((o3) => {
        var r2;
        return (null === (r2 = o3[e3]) || void 0 === r2 ? void 0 : r2.current) === t5.current ? o3 : { ...o3, [e3]: t5 };
      });
    })(e2, t4) };
  }, [n2, i2, a, u]), p = (0, import_react.useMemo)(() => ({ getTooltipData: d }), [d]);
  return import_react.default.createElement(A.Provider, { value: p }, t2);
};
function O(e2 = g) {
  return (0, import_react.useContext)(A).getTooltipData(e2);
}
var k = ({ tooltipId: t2, children: o2, className: r2, place: l2, content: n2, html: s2, variant: a, offset: u, wrapper: d, events: p, positionStrategy: v, delayShow: m, delayHide: y2 }) => {
  const { attach: h2, detach: w2 } = O(t2), b2 = (0, import_react.useRef)(null);
  return (0, import_react.useEffect)(() => (h2(b2), () => {
    w2(b2);
  }), []), import_react.default.createElement("span", { ref: b2, className: (0, import_classnames.default)("react-tooltip-wrapper", r2), "data-tooltip-place": l2, "data-tooltip-content": n2, "data-tooltip-html": s2, "data-tooltip-variant": a, "data-tooltip-offset": u, "data-tooltip-wrapper": d, "data-tooltip-events": p, "data-tooltip-position-strategy": v, "data-tooltip-delay-show": m, "data-tooltip-delay-hide": y2 }, o2);
};
var L = "undefined" != typeof window ? import_react.useLayoutEffect : import_react.useEffect;
var C = (e2) => {
  if (!(e2 instanceof HTMLElement || e2 instanceof SVGElement))
    return false;
  const t2 = getComputedStyle(e2);
  return ["overflow", "overflow-x", "overflow-y"].some((e3) => {
    const o2 = t2.getPropertyValue(e3);
    return "auto" === o2 || "scroll" === o2;
  });
};
var x = (e2) => {
  if (!e2)
    return null;
  let t2 = e2.parentElement;
  for (; t2; ) {
    if (C(t2))
      return t2;
    t2 = t2.parentElement;
  }
  return document.scrollingElement || document.documentElement;
};
var R = async ({ elementReference: e2 = null, tooltipReference: t2 = null, tooltipArrowReference: o2 = null, place: r2 = "top", offset: l2 = 10, strategy: n2 = "absolute", middlewares: c2 = [offset(Number(l2)), flip(), shift({ padding: 5 })], border: i2 }) => {
  if (!e2)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r2 };
  if (null === t2)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r2 };
  const s2 = c2;
  return o2 ? (s2.push(arrow({ element: o2, padding: 5 })), computePosition2(e2, t2, { placement: r2, strategy: n2, middleware: s2 }).then(({ x: e3, y: t3, placement: o3, middlewareData: r3 }) => {
    var l3, n3;
    const c3 = { left: `${e3}px`, top: `${t3}px`, border: i2 }, { x: s3, y: a } = null !== (l3 = r3.arrow) && void 0 !== l3 ? l3 : { x: 0, y: 0 }, u = null !== (n3 = { top: "bottom", right: "left", bottom: "top", left: "right" }[o3.split("-")[0]]) && void 0 !== n3 ? n3 : "bottom", d = i2 && { borderBottom: i2, borderRight: i2 };
    let p = 0;
    if (i2) {
      const e4 = `${i2}`.match(/(\d+)px/);
      p = (null == e4 ? void 0 : e4[1]) ? Number(e4[1]) : 1;
    }
    return { tooltipStyles: c3, tooltipArrowStyles: { left: null != s3 ? `${s3}px` : "", top: null != a ? `${a}px` : "", right: "", bottom: "", ...d, [u]: `-${4 + p}px` }, place: o3 };
  })) : computePosition2(e2, t2, { placement: "bottom", strategy: n2, middleware: s2 }).then(({ x: e3, y: t3, placement: o3 }) => ({ tooltipStyles: { left: `${e3}px`, top: `${t3}px` }, tooltipArrowStyles: {}, place: o3 }));
};
var N = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" };
var $ = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
var I = ({ id: t2, className: l2, classNameArrow: n2, variant: s2 = "dark", anchorId: a, anchorSelect: u, place: d = "top", offset: p = 10, events: v = ["hover"], openOnClick: y2 = false, positionStrategy: h2 = "absolute", middlewares: w2, wrapper: b2, delayShow: E2 = 0, delayHide: g2 = 0, float: _2 = false, hidden: A2 = false, noArrow: T2 = false, clickable: k2 = false, closeOnEsc: C2 = false, closeOnScroll: I2 = false, closeOnResize: j2 = false, openEvents: B2, closeEvents: z, globalCloseEvents: D, style: H, position: q, afterShow: M, afterHide: W, content: P, contentWrapperRef: F, isOpen: K, setIsOpen: U, activeAnchor: X, setActiveAnchor: Y, border: G, opacity: V, arrowColor: Z }) => {
  const J = (0, import_react.useRef)(null), Q = (0, import_react.useRef)(null), ee = (0, import_react.useRef)(null), te = (0, import_react.useRef)(null), [oe, re] = (0, import_react.useState)(d), [le, ne] = (0, import_react.useState)({}), [ce, ie] = (0, import_react.useState)({}), [se, ae] = (0, import_react.useState)(false), [ue, de] = (0, import_react.useState)(false), pe = (0, import_react.useRef)(false), ve = (0, import_react.useRef)(null), { anchorRefs: me, setActiveAnchor: fe } = O(t2), ye = (0, import_react.useRef)(false), [he, we] = (0, import_react.useState)([]), be = (0, import_react.useRef)(false), Ee = y2 || v.includes("click"), Se = Ee || (null == B2 ? void 0 : B2.click) || (null == B2 ? void 0 : B2.dblclick) || (null == B2 ? void 0 : B2.mousedown), ge = B2 ? { ...B2 } : { mouseenter: true, focus: true, click: false, dblclick: false, mousedown: false };
  !B2 && Ee && Object.assign(ge, { mouseenter: false, focus: false, click: true });
  const _e = z ? { ...z } : { mouseleave: true, blur: true, click: false };
  !z && Ee && Object.assign(_e, { mouseleave: false, blur: false });
  const Ae = D ? { ...D } : { escape: C2 || false, scroll: I2 || false, resize: j2 || false, clickOutsideAnchor: Se || false };
  L(() => (be.current = true, () => {
    be.current = false;
  }), []);
  const Te = (e2) => {
    be.current && (e2 && de(true), setTimeout(() => {
      be.current && (null == U || U(e2), void 0 === K && ae(e2));
    }, 10));
  };
  (0, import_react.useEffect)(() => {
    if (void 0 === K)
      return () => null;
    K && de(true);
    const e2 = setTimeout(() => {
      ae(K);
    }, 10);
    return () => {
      clearTimeout(e2);
    };
  }, [K]), (0, import_react.useEffect)(() => {
    se !== pe.current && (pe.current = se, se ? null == M || M() : null == W || W());
  }, [se]);
  const Oe = (e2 = g2) => {
    te.current && clearTimeout(te.current), te.current = setTimeout(() => {
      ye.current || Te(false);
    }, e2);
  }, ke = (e2) => {
    var t3;
    if (!e2)
      return;
    const o2 = null !== (t3 = e2.currentTarget) && void 0 !== t3 ? t3 : e2.target;
    if (!(null == o2 ? void 0 : o2.isConnected))
      return Y(null), void fe({ current: null });
    E2 ? (ee.current && clearTimeout(ee.current), ee.current = setTimeout(() => {
      Te(true);
    }, E2)) : Te(true), Y(o2), fe({ current: o2 }), te.current && clearTimeout(te.current);
  }, Le = () => {
    k2 ? Oe(g2 || 100) : g2 ? Oe() : Te(false), ee.current && clearTimeout(ee.current);
  }, Ce = ({ x: e2, y: t3 }) => {
    R({ place: d, offset: p, elementReference: { getBoundingClientRect: () => ({ x: e2, y: t3, width: 0, height: 0, top: t3, left: e2, right: e2, bottom: t3 }) }, tooltipReference: J.current, tooltipArrowReference: Q.current, strategy: h2, middlewares: w2, border: G }).then((e3) => {
      Object.keys(e3.tooltipStyles).length && ne(e3.tooltipStyles), Object.keys(e3.tooltipArrowStyles).length && ie(e3.tooltipArrowStyles), re(e3.place);
    });
  }, xe = (e2) => {
    if (!e2)
      return;
    const t3 = e2, o2 = { x: t3.clientX, y: t3.clientY };
    Ce(o2), ve.current = o2;
  }, Re = (e2) => {
    var t3;
    [document.querySelector(`[id='${a}']`), ...he].some((t4) => null == t4 ? void 0 : t4.contains(e2.target)) || (null === (t3 = J.current) || void 0 === t3 ? void 0 : t3.contains(e2.target)) || (Te(false), ee.current && clearTimeout(ee.current));
  }, Ne = S(ke, 50, true), $e = S(Le, 50, true), Ie = (0, import_react.useCallback)(() => {
    q ? Ce(q) : _2 ? ve.current && Ce(ve.current) : (null == X ? void 0 : X.isConnected) && R({ place: d, offset: p, elementReference: X, tooltipReference: J.current, tooltipArrowReference: Q.current, strategy: h2, middlewares: w2, border: G }).then((e2) => {
      be.current && (Object.keys(e2.tooltipStyles).length && ne(e2.tooltipStyles), Object.keys(e2.tooltipArrowStyles).length && ie(e2.tooltipArrowStyles), re(e2.place));
    });
  }, [se, X, P, H, d, p, h2, q, _2]);
  (0, import_react.useEffect)(() => {
    var e2, t3;
    const o2 = new Set(me);
    he.forEach((e3) => {
      o2.add({ current: e3 });
    });
    const r2 = document.querySelector(`[id='${a}']`);
    r2 && o2.add({ current: r2 });
    const l3 = () => {
      Te(false);
    }, n3 = x(X), c2 = x(J.current);
    Ae.scroll && (window.addEventListener("scroll", l3), null == n3 || n3.addEventListener("scroll", l3), null == c2 || c2.addEventListener("scroll", l3));
    let i2 = null;
    Ae.resize ? window.addEventListener("resize", l3) : X && J.current && (i2 = autoUpdate(X, J.current, Ie, { ancestorResize: true, elementResize: true, layoutShift: true }));
    const s3 = (e3) => {
      "Escape" === e3.key && Te(false);
    };
    Ae.escape && window.addEventListener("keydown", s3), Ae.clickOutsideAnchor && window.addEventListener("click", Re);
    const u2 = [], d2 = (e3) => {
      se || ke(e3);
    }, p2 = () => {
      se && Le();
    }, v2 = ["mouseenter", "mouseleave", "focus", "blur"], f2 = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(ge).forEach(([e3, t4]) => {
      t4 && (v2.includes(e3) ? u2.push({ event: e3, listener: Ne }) : f2.includes(e3) && u2.push({ event: e3, listener: d2 }));
    }), Object.entries(_e).forEach(([e3, t4]) => {
      t4 && (v2.includes(e3) ? u2.push({ event: e3, listener: $e }) : f2.includes(e3) && u2.push({ event: e3, listener: p2 }));
    }), _2 && u2.push({ event: "mousemove", listener: xe });
    const y3 = () => {
      ye.current = true;
    }, h3 = () => {
      ye.current = false, Le();
    };
    return k2 && !Se && (null === (e2 = J.current) || void 0 === e2 || e2.addEventListener("mouseenter", y3), null === (t3 = J.current) || void 0 === t3 || t3.addEventListener("mouseleave", h3)), u2.forEach(({ event: e3, listener: t4 }) => {
      o2.forEach((o3) => {
        var r3;
        null === (r3 = o3.current) || void 0 === r3 || r3.addEventListener(e3, t4);
      });
    }), () => {
      var e3, t4;
      Ae.scroll && (window.removeEventListener("scroll", l3), null == n3 || n3.removeEventListener("scroll", l3), null == c2 || c2.removeEventListener("scroll", l3)), Ae.resize ? window.removeEventListener("resize", l3) : null == i2 || i2(), Ae.clickOutsideAnchor && window.removeEventListener("click", Re), Ae.escape && window.removeEventListener("keydown", s3), k2 && !Se && (null === (e3 = J.current) || void 0 === e3 || e3.removeEventListener("mouseenter", y3), null === (t4 = J.current) || void 0 === t4 || t4.removeEventListener("mouseleave", h3)), u2.forEach(({ event: e4, listener: t5 }) => {
        o2.forEach((o3) => {
          var r3;
          null === (r3 = o3.current) || void 0 === r3 || r3.removeEventListener(e4, t5);
        });
      });
    };
  }, [X, Ie, ue, me, he, B2, z, D, Ee]), (0, import_react.useEffect)(() => {
    let e2 = null != u ? u : "";
    !e2 && t2 && (e2 = `[data-tooltip-id='${t2}']`);
    const o2 = new MutationObserver((o3) => {
      const r2 = [], l3 = [];
      o3.forEach((o4) => {
        if ("attributes" === o4.type && "data-tooltip-id" === o4.attributeName) {
          o4.target.getAttribute("data-tooltip-id") === t2 && r2.push(o4.target);
        }
        if ("childList" === o4.type) {
          if (X) {
            const t3 = [...o4.removedNodes].filter((e3) => 1 === e3.nodeType);
            if (e2)
              try {
                l3.push(...t3.filter((t4) => t4.matches(e2))), l3.push(...t3.flatMap((t4) => [...t4.querySelectorAll(e2)]));
              } catch (e3) {
              }
            t3.some((e3) => {
              var t4;
              return !!(null === (t4 = null == e3 ? void 0 : e3.contains) || void 0 === t4 ? void 0 : t4.call(e3, X)) && (de(false), Te(false), Y(null), ee.current && clearTimeout(ee.current), te.current && clearTimeout(te.current), true);
            });
          }
          if (e2)
            try {
              const t3 = [...o4.addedNodes].filter((e3) => 1 === e3.nodeType);
              r2.push(...t3.filter((t4) => t4.matches(e2))), r2.push(...t3.flatMap((t4) => [...t4.querySelectorAll(e2)]));
            } catch (e3) {
            }
        }
      }), (r2.length || l3.length) && we((e3) => [...e3.filter((e4) => !l3.includes(e4)), ...r2]);
    });
    return o2.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-tooltip-id"] }), () => {
      o2.disconnect();
    };
  }, [t2, u, X]), (0, import_react.useEffect)(() => {
    Ie();
  }, [Ie]), (0, import_react.useEffect)(() => {
    if (!(null == F ? void 0 : F.current))
      return () => null;
    const e2 = new ResizeObserver(() => {
      Ie();
    });
    return e2.observe(F.current), () => {
      e2.disconnect();
    };
  }, [P, null == F ? void 0 : F.current]), (0, import_react.useEffect)(() => {
    var e2;
    const t3 = document.querySelector(`[id='${a}']`), o2 = [...he, t3];
    X && o2.includes(X) || Y(null !== (e2 = he[0]) && void 0 !== e2 ? e2 : t3);
  }, [a, he, X]), (0, import_react.useEffect)(() => () => {
    ee.current && clearTimeout(ee.current), te.current && clearTimeout(te.current);
  }, []), (0, import_react.useEffect)(() => {
    let e2 = u;
    if (!e2 && t2 && (e2 = `[data-tooltip-id='${t2}']`), e2)
      try {
        const t3 = Array.from(document.querySelectorAll(e2));
        we(t3);
      } catch (e3) {
        we([]);
      }
  }, [t2, u]);
  const je = !A2 && P && se && Object.keys(le).length > 0;
  return ue ? import_react.default.createElement(b2, { id: t2, role: "tooltip", className: (0, import_classnames.default)("react-tooltip", N.tooltip, $.tooltip, $[s2], l2, `react-tooltip__place-${oe}`, N[je ? "show" : "closing"], je ? "react-tooltip__show" : "react-tooltip__closing", "fixed" === h2 && N.fixed, k2 && N.clickable), onTransitionEnd: (e2) => {
    se || "opacity" !== e2.propertyName || de(false);
  }, style: { ...H, ...le, opacity: void 0 !== V && je ? V : void 0 }, ref: J }, P, import_react.default.createElement(b2, { className: (0, import_classnames.default)("react-tooltip-arrow", N.arrow, $.arrow, n2, T2 && N.noArrow), style: { ...ce, background: Z ? `linear-gradient(to right bottom, transparent 50%, ${Z} 50%)` : void 0 }, ref: Q })) : null;
};
var j = ({ content: t2 }) => import_react.default.createElement("span", { dangerouslySetInnerHTML: { __html: t2 } });
var B = ({ id: t2, anchorId: r2, anchorSelect: l2, content: n2, html: s2, render: a, className: u, classNameArrow: d, variant: p = "dark", place: v = "top", offset: m = 10, wrapper: f2 = "div", children: y2 = null, events: h2 = ["hover"], openOnClick: w2 = false, positionStrategy: b2 = "absolute", middlewares: E2, delayShow: S2 = 0, delayHide: g2 = 0, float: _2 = false, hidden: A2 = false, noArrow: T2 = false, clickable: k2 = false, closeOnEsc: L2 = false, closeOnScroll: C2 = false, closeOnResize: x2 = false, openEvents: R2, closeEvents: N2, globalCloseEvents: $2, style: B2, position: z, isOpen: D, disableStyleInjection: H = false, border: q, opacity: M, arrowColor: W, setIsOpen: P, afterShow: F, afterHide: K }) => {
  const [U, X] = (0, import_react.useState)(n2), [Y, G] = (0, import_react.useState)(s2), [V, Z] = (0, import_react.useState)(v), [J, Q] = (0, import_react.useState)(p), [ee, te] = (0, import_react.useState)(m), [oe, re] = (0, import_react.useState)(S2), [le, ne] = (0, import_react.useState)(g2), [ce, ie] = (0, import_react.useState)(_2), [se, ae] = (0, import_react.useState)(A2), [ue, de] = (0, import_react.useState)(f2), [pe, ve] = (0, import_react.useState)(h2), [me, fe] = (0, import_react.useState)(b2), [ye, he] = (0, import_react.useState)(null), we = (0, import_react.useRef)(H), { anchorRefs: be, activeAnchor: Ee } = O(t2), Se = (e2) => null == e2 ? void 0 : e2.getAttributeNames().reduce((t3, o2) => {
    var r3;
    if (o2.startsWith("data-tooltip-")) {
      t3[o2.replace(/^data-tooltip-/, "")] = null !== (r3 = null == e2 ? void 0 : e2.getAttribute(o2)) && void 0 !== r3 ? r3 : null;
    }
    return t3;
  }, {}), ge = (e2) => {
    const t3 = { place: (e3) => {
      var t4;
      Z(null !== (t4 = e3) && void 0 !== t4 ? t4 : v);
    }, content: (e3) => {
      X(null != e3 ? e3 : n2);
    }, html: (e3) => {
      G(null != e3 ? e3 : s2);
    }, variant: (e3) => {
      var t4;
      Q(null !== (t4 = e3) && void 0 !== t4 ? t4 : p);
    }, offset: (e3) => {
      te(null === e3 ? m : Number(e3));
    }, wrapper: (e3) => {
      var t4;
      de(null !== (t4 = e3) && void 0 !== t4 ? t4 : f2);
    }, events: (e3) => {
      const t4 = null == e3 ? void 0 : e3.split(" ");
      ve(null != t4 ? t4 : h2);
    }, "position-strategy": (e3) => {
      var t4;
      fe(null !== (t4 = e3) && void 0 !== t4 ? t4 : b2);
    }, "delay-show": (e3) => {
      re(null === e3 ? S2 : Number(e3));
    }, "delay-hide": (e3) => {
      ne(null === e3 ? g2 : Number(e3));
    }, float: (e3) => {
      ie(null === e3 ? _2 : "true" === e3);
    }, hidden: (e3) => {
      ae(null === e3 ? A2 : "true" === e3);
    } };
    Object.values(t3).forEach((e3) => e3(null)), Object.entries(e2).forEach(([e3, o2]) => {
      var r3;
      null === (r3 = t3[e3]) || void 0 === r3 || r3.call(t3, o2);
    });
  };
  (0, import_react.useEffect)(() => {
    X(n2);
  }, [n2]), (0, import_react.useEffect)(() => {
    G(s2);
  }, [s2]), (0, import_react.useEffect)(() => {
    Z(v);
  }, [v]), (0, import_react.useEffect)(() => {
    Q(p);
  }, [p]), (0, import_react.useEffect)(() => {
    te(m);
  }, [m]), (0, import_react.useEffect)(() => {
    re(S2);
  }, [S2]), (0, import_react.useEffect)(() => {
    ne(g2);
  }, [g2]), (0, import_react.useEffect)(() => {
    ie(_2);
  }, [_2]), (0, import_react.useEffect)(() => {
    ae(A2);
  }, [A2]), (0, import_react.useEffect)(() => {
    fe(b2);
  }, [b2]), (0, import_react.useEffect)(() => {
    we.current !== H && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [H]), (0, import_react.useEffect)(() => {
    "undefined" != typeof window && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: "core" === H, disableBase: H } }));
  }, []), (0, import_react.useEffect)(() => {
    var e2;
    const o2 = new Set(be);
    let n3 = l2;
    if (!n3 && t2 && (n3 = `[data-tooltip-id='${t2}']`), n3)
      try {
        document.querySelectorAll(n3).forEach((e3) => {
          o2.add({ current: e3 });
        });
      } catch (e3) {
        console.warn(`[react-tooltip] "${n3}" is not a valid CSS selector`);
      }
    const c2 = document.querySelector(`[id='${r2}']`);
    if (c2 && o2.add({ current: c2 }), !o2.size)
      return () => null;
    const i2 = null !== (e2 = null != ye ? ye : c2) && void 0 !== e2 ? e2 : Ee.current, s3 = new MutationObserver((e3) => {
      e3.forEach((e4) => {
        var t3;
        if (!i2 || "attributes" !== e4.type || !(null === (t3 = e4.attributeName) || void 0 === t3 ? void 0 : t3.startsWith("data-tooltip-")))
          return;
        const o3 = Se(i2);
        ge(o3);
      });
    }), a2 = { attributes: true, childList: false, subtree: false };
    if (i2) {
      const e3 = Se(i2);
      ge(e3), s3.observe(i2, a2);
    }
    return () => {
      s3.disconnect();
    };
  }, [be, Ee, ye, r2, l2]), (0, import_react.useEffect)(() => {
    (null == B2 ? void 0 : B2.border) && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), q && !CSS.supports("border", `${q}`) && console.warn(`[react-tooltip] "${q}" is not a valid \`border\`.`), (null == B2 ? void 0 : B2.opacity) && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), M && !CSS.supports("opacity", `${M}`) && console.warn(`[react-tooltip] "${M}" is not a valid \`opacity\`.`);
  }, []);
  let _e = y2;
  const Ae = (0, import_react.useRef)(null);
  if (a) {
    const t3 = a({ content: null != U ? U : null, activeAnchor: ye });
    _e = t3 ? import_react.default.createElement("div", { ref: Ae, className: "react-tooltip-content-wrapper" }, t3) : null;
  } else
    U && (_e = U);
  Y && (_e = import_react.default.createElement(j, { content: Y }));
  const Te = { id: t2, anchorId: r2, anchorSelect: l2, className: u, classNameArrow: d, content: _e, contentWrapperRef: Ae, place: V, variant: J, offset: ee, wrapper: ue, events: pe, openOnClick: w2, positionStrategy: me, middlewares: E2, delayShow: oe, delayHide: le, float: ce, hidden: se, noArrow: T2, clickable: k2, closeOnEsc: L2, closeOnScroll: C2, closeOnResize: x2, openEvents: R2, closeEvents: N2, globalCloseEvents: $2, style: B2, position: z, isOpen: D, border: q, opacity: M, arrowColor: W, setIsOpen: P, afterShow: F, afterHide: K, activeAnchor: ye, setActiveAnchor: (e2) => he(e2) };
  return import_react.default.createElement(I, { ...Te });
};
"undefined" != typeof window && window.addEventListener("react-tooltip-inject-styles", (e2) => {
  e2.detail.disableCore || b({ css: `:root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}`, type: "core" }), e2.detail.disableBase || b({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
export {
  B as Tooltip,
  T as TooltipProvider,
  k as TooltipWrapper,
  E as removeStyle
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-tooltip/dist/react-tooltip.min.mjs:
  (*
  * React Tooltip
  * {@link https://github.com/ReactTooltip/react-tooltip}
  * @copyright ReactTooltip Team
  * @license MIT
  *)
*/
//# sourceMappingURL=react-tooltip.js.map
