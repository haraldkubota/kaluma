declare class GraphicsContext {
  constructor(width: number, height: number, options?: {
    rotation?: number,
    setPixel?: ((x: number, y: number, color: number) => void),
    getPixel?: ((x: number, y: number) => number),
    fillRect?: ((x: number, y: number, w: number, h: number, color: number) => void)
  });

  getWidth(): number;

  getHeight(): number;

  clearScreen(): void;

  color16(red: number, green: number, blue: number): void;

  fillScreen(color: number): void;

  setRotation(rotation: number): void;

  getRotation(): number;

  setColor(color: number);

  getColor(): number;

  setFillColor(color: number): void;

  getFillColor(): number;

  setFontColor(color: number): void;

  getFontColor(): number;

  setFont(font: {
    bitmap: Uint8Array,
    glyphs: Uint8Array,
    width: number,
    height: number,
    first: number,
    last: number,
    advanceX: number,
    advanceY: number
  } | null): void;

  setFontScale(scaleX: number, scaleY: number): void;

  setPixel(x: number, y: number, color: number);

  getPixel(x: number, y: number): number;

  drawLine(x0: number, y0: number, x1: number, y1: number): void;

  drawRect(x0: number, y0: number, w: number, h: number): void;

  drawCircle(x: number, y: number, r: number): void;

  fillCircle(x: number, y: number, r: number): void;

  drawRoundRect(x: number, y: number, w: number, h: number, r: number): void;

  fillRoundRect(x: number, y: number, r: number): void;

  drawText(x: number, y: number, text: string): void;

  measureText(text: string): {
    width: number,
    height: number
  };

  drawBitmap(x: number, y: number, bitmap: {
    width: number,
    height: number,
    bpp: number,
    data: Uint8Array | string
  }, options?: {
    color?: number,
    transparent?: number,
    scaleX?: number,
    scaleY?: number,
    flipX?: number,
    flipY?: number
  });
}

declare class BufferedGraphicsContext extends GraphicsContext {
  constructor(width: number, height: number, options?: {
    rotation?: number,
    bpp?: number,
    display?: (buffer: Uint8Array) => void,
  });

  buffer: Uint8Array;

  display(): void;
}
