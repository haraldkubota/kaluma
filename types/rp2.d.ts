declare function dormant(pins: number[], events: number[]): void;

declare namespace PIO {
  let FIFO_JOIN_NONE: number;
  let FIFO_JOIN_TX: number;
  let FIFO_JOIN_RX: number;
  let SHIFT_LEFT: number;
  let SHIFT_RIGHT: number;
  let TX_LESSTHAN: number;
  let RX_LESSTHAN: number;
}

declare class ASM {
  constructor(options: {
    sideset?: number,
    sidesetOpt?: boolean,
    sidesetPindirs?: boolean
  });
  jmp(cond: string, target: string): ASM;
  jmp(target: string): ASM;
  wait(pol: number, src: string, idx: number, rel: string): ASM;
  in(src: string, bits: number): ASM;
  out(dst: string, bits: number): ASM;
  push(iffull?: number|string, block?: number|string): ASM;
  pull(ifempty: number|string, block: number|string): ASM;
  pull(ifempty: number|string, block?: number|string): ASM;
  pull(): ASM;
  mov(dst: string, src: string): ASM;
  irq(cmd: string, irqnum: number, rel?: string): ASM;
  irq(irqnum: number, rel?: string): ASM;
  set(dst: string, val: number): ASM;
  nop(): ASM;
  label(name: string): ASM;
  side(val: number): ASM;
  delay(val: number): ASM;
  wrap_target(): ASM;
  wrap(): ASM;
  toBinary(): Uint16Array;
  toInst(idx?: number): number;
  labels: Map<string, number>;
}

declare class StateMachine {
  constructor(id: number, asm: ASM, options?: {
    freq?: number,
    inBase?: number,
    inCount?: number,
    outBase?: number,
    outCount?: number,
    setBase?: number,
    setCount?: number,
    sidesetBase?: number,
    jmpPin?: number,
    inShiftDir?: number,
    autopush?: boolean,
    pushThreshold?: number,
    outShiftSir?: number,
    autopull?: boolean,
    pullThreshold?: number,
    fifoJoin?: number,
    outSticky?: boolean,
    outEnablePin?: number,
    movStatusSel?: number,
    movSattusN?: number
  });
  getAvailableId(): number;
  active(value: number): void;
  restart(): void;
  exec(inst: number): void;
  get(): number;
  put(value: number | Uint32Array): void;
  setPins(value: number, mask?: number): void;
  rxfifo(): number;
  txfifo(): number;
  clearFIFOs(): void;
  drainTXFIFO(): void;
  irq(handler: (interrupt) => void): void;
}