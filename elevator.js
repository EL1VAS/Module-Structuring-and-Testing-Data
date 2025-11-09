function elevatorCloser(left, call, right) {
  const leftFloor = Math.abs(left - call);
  const rightFloor = Math.abs(right - call);
  if (leftFloor >= rightFloor) {
    return "right";
  }
  return "left";
}
