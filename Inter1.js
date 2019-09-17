function loop(x) {
  if (x >= 1000000000000)
    return;
  // do stuff
  loop(x + 1);
}
loop(0);