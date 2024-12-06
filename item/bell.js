function drawBell(ctx, x, y, size, hue) {
    const top = y -size / 2;
    const left = x -size / 2;
    const bottom = y +size / 2;
    const right = x+size/2;
    ctx.strokeRect(top, left, size, size);
}