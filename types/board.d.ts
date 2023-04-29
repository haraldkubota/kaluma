declare let INPUT: number;
declare var OUTPUT: number;
declare let INPUT_PULLUP: number;
declare let INPUT_PULLDOWN: number;
declare let HIGH: number
declare let LOW: number;
declare let FALLING: number;
declare let RISING: number;
declare let CHANGE: number;

declare class GPIO {
  constructor(pin: number, mode?: number);

  read(): number;

  write(value: number): void;

  toggle(): void;

  low(): void;

  high(): void;

  irq(callback: (pin: number, event: number) => void, event?: number);

  pin: number;
  mode: number;
}

declare class Button {
  constructor(pin: number, options?: {
    mode?: number, event?: number, debounce?: number
  });

  read(): number;

  close(): void;

  on(event: string, callback: () => void);
}

declare class PWM {
  constructor(pin: number, frequency?: number, duty?: number);

  start(): void;

  stop(): void;

  getFrequency(): number;

  setFrequency(frequency: number): void;

  getDuty(): number;

  setDuty(duty: number): void;

  close(): void;
}

declare class ADC {
  constructor(pin: number);

  read(): number;

  pin: number;
}

declare class I2C {
  constructor(pin: number, options?: {
    mode?: number,
    baudrate?: number,
    scl?: number,
    sda?: number
  });

  MASTER: number;
  SLAVE: number;

  write(data: Uint8Array | string, address: number, timeout?: number, count?: number): number;

  read(length: number, address: number, timeout?: number): Uint8Array | null;

  memWrite(data: Uint8Array | string, address: number, memAddress: number, memAddressSize?: number, timeout?: number, count?: number): number;

  memRead(length: number, address: number, memAddress: number, memAddressSize?: number, timeout?: number): Uint8Array | null;

  close(): void;
}

declare class SPI {
  constructor(bus: number, options?: {
    mode?: number,
    baudrate?: number,
    bitorder?: number,
    sck?: number,
    mosi?: number,
    miso?: number
  });

  MODE_0: number;
  MODE_1: number;
  MODE_2: number;
  MODE_3: number;
  MSB: number;
  LSB: number;

  transfer(data: Uint8Array | string, timeout?: number): Uint8Array | null;

  send(data: Uint8Array | string, timeout?: number, count?: number): number;

  recv(length: number, timeout?: number): Uint8Array | null;

  close();
}


declare class UART {
  constructor(port: number, options?: {
    baudrate?: number,
    bits?: number,
    parity?: number,
    stop?: number,
    flow?: number,
    bufferSize?: number,
    tx?: number,
    rx?: number,
    cts?: number,
    rts?: number
  });

  PARITY_NONE: number;
  PARITY_ODD: number;
  PARITY_EVEN: number;
  FLOW_NONE: number;
  FLOW_RTS: number;
  FLOW_CTS: number;
  FLOW_RTS_CTS: number;

  write(data: Uint8Array | string, options?: {
    count?: number
  });

  close(): void;

  on(event: string, callback: (data: Uint8Array) => void);

}

declare namespace board {
  let name: string;
  let LED: number;

  function gpio(pin: number, mode?: number): GPIO;

  function button(pin: number, options?: any): Button

  function pwm(pin: number, frequency?: number, duty?: number): PWM;

  function adc(pin: number): ADC;

  function i2c(bus: number, options?: any): I2C;

  function spi(bus: number, options?: any): SPI;

  function uart(port: number, options?: any): UART;
}



declare function delay(msec: number): void;
declare function millis(): number;
declare function delayMicroseconds(usec: number): void;
declare function micros(): number;
