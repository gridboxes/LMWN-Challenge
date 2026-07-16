"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";

/**
 * Footer pixel art. Every sprite is a string map on a shared pixel grid — one
 * char is one pixel, so the art stays quantised and reviewable in the diff.
 *
 *   h helmet   v visor    b jacket   a arm/leg   f frame/rack
 *   w wheel    d hub      k parcel   r heart     s locker shell
 *   g cell     o lit cell .  empty
 */
const PIXEL_CLASS: Record<string, string> = {
  h: "px-helmet",
  v: "px-visor",
  b: "px-body",
  a: "px-limb",
  l: "px-limb",
  f: "px-frame",
  w: "px-wheel",
  d: "px-hub",
  k: "px-box",
  r: "px-heart",
  s: "px-shell",
  g: "px-cell",
  o: "px-cell-lit",
};

// 24x16 — pedal down. Wheels are 7x7 so the corners clip round; the parcel
// rides as its own sprite on the rack (row 8) so it can be handed off.
export const RIDER_A = [
  "........................",
  "...........hhhh.........",
  "..........hhhhhh........",
  "..........hhvvvv........",
  "..........hhhhhh........",
  "...........bbbb.........",
  "..........bbbbbaa.......",
  ".........bbbbbb..aa.....",
  ".ffffff..bbbbb.....f....",
  "...www..fffffff..www....",
  "..w...w....l....w...w...",
  ".w.....w..ll...w.....w..",
  ".w..d..w...ll..w..d..w..",
  ".w.....w....f..w.....w..",
  "..w...w.........w...w...",
  "...www...........www....",
] as const;

// 24x16 — pedal up. Only rows 10-12 change; the rest is identical to A.
export const RIDER_B = [
  "........................",
  "...........hhhh.........",
  "..........hhhhhh........",
  "..........hhvvvv........",
  "..........hhhhhh........",
  "...........bbbb.........",
  "..........bbbbbaa.......",
  ".........bbbbbb..aa.....",
  ".ffffff..bbbbb.....f....",
  "...www..fffffff..www....",
  "..w...w.....l...w...w...",
  ".w.....w...ll..w.....w..",
  ".w..d..w..ll...w..d..w..",
  ".w.....w....f..w.....w..",
  "..w...w.........w...w...",
  "...www...........www....",
] as const;

// 7x7 — the parcel, with the Priority-with-Purpose heart on its side.
// Sized to sit on the rack without out-scaling the rider.
export const PARCEL = [
  "kkkkkkk",
  "k.....k",
  "k.r.r.k",
  "krrrrrk",
  "k.rrr.k",
  "k..r..k",
  "kkkkkkk",
] as const;

// 13x13 — locker at rest, middle-left cell lit.
export const LOCKER_SHUT = [
  "sssssssssssss",
  "sgggggsgggggs",
  "sgggggsgggggs",
  "sgggggsgggggs",
  "sssssssssssss",
  "sooooosgggggs",
  "sooooosgggggs",
  "sooooosgggggs",
  "sssssssssssss",
  "sgggggsgggggs",
  "sgggggsgggggs",
  "sgggggsgggggs",
  "sssssssssssss",
] as const;

// 13x13 — same locker, lit cell open with the parcel inside.
export const LOCKER_OPEN = [
  "sssssssssssss",
  "sgggggsgggggs",
  "sgggggsgggggs",
  "sgggggsgggggs",
  "sssssssssssss",
  "s.....sgggggs",
  "s.kkk.sgggggs",
  "s.kkk.sgggggs",
  "sssssssssssss",
  "sgggggsgggggs",
  "sgggggsgggggs",
  "sgggggsgggggs",
  "sssssssssssss",
] as const;

// 24x16 — he notices you. Body, bike and rack are byte-identical to RIDER_A;
// only rows 1-4 change, so the swap reads as the head turning, nothing else.
// Face-on the skull is wider than in profile and the visor centres — that
// widening is what sells the turn at this size.
export const RIDER_LOOK = [
  "........................",
  "...........hhhh.........",
  ".........hhhhhhhh.......",
  ".........hhvvvvhh.......",
  ".........hhhhhhhh.......",
  "...........bbbb.........",
  "..........bbbbbaa.......",
  ".........bbbbbb..aa.....",
  ".ffffff..bbbbb.....f....",
  "...www..fffffff..www....",
  "..w...w....l....w...w...",
  ".w.....w..ll...w.....w..",
  ".w..d..w...ll..w..d..w..",
  ".w.....w....f..w.....w..",
  "..w...w.........w...w...",
  "...www...........www....",
] as const;

// Three sizes so the loop reads as a crowd rather than a repeated stamp.
export const HEART_SM = [
  "r.r",
  "rrr",
  ".r.",
] as const;

export const HEART = [
  ".r.r.",
  "rrrrr",
  "rrrrr",
  ".rrr.",
  "..r..",
] as const;

export const HEART_LG = [
  ".rr.rr.",
  "rrrrrrr",
  "rrrrrrr",
  "rrrrrrr",
  ".rrrrr.",
  "..rrr..",
  "...r...",
] as const;

// Mixed sizes, staggered in CSS — nine hearts strung along the lane.
const HEART_MIX = [HEART_SM, HEART, HEART_LG, HEART, HEART_SM, HEART_LG, HEART, HEART_SM, HEART];

export function PixelSprite({ map, className }: { map: readonly string[]; className?: string }) {
  const cells: ReactNode[] = [];

  map.forEach((row, y) => {
    [...row].forEach((char, x) => {
      const pixel = PIXEL_CLASS[char];
      if (!pixel) return;
      cells.push(<i className={pixel} key={`${x}:${y}`} style={{ gridColumn: x + 1, gridRow: y + 1 }} />);
    });
  });

  const size = { "--sprite-w": map[0].length, "--sprite-h": map.length } as CSSProperties;

  return (
    <div className={className ? `pixel-sprite ${className}` : "pixel-sprite"} style={size}>
      {cells}
    </div>
  );
}

/**
 * The footer vignette. Rides itself on hover via CSS; the one thing CSS can't
 * express is "commit on click, then let go when you look away" — nothing can
 * un-check a checkbox on mouse-leave — so `flown` lives here instead.
 *
 * Decorative throughout: aria-hidden, pointer-only, and opted out entirely
 * under prefers-reduced-motion (see globals.css).
 */
export function FooterPixelScene() {
  const [flown, setFlown] = useState(false);

  return (
    <div
      aria-hidden="true"
      className={flown ? "footer-pixel-scene is-flown" : "footer-pixel-scene"}
      onMouseLeave={() => setFlown(false)}
    >
      <div className="pixel-route" />
      <div className="pixel-speed"><i /><i /><i /></div>

      <div className="pixel-courier" onClick={() => setFlown(true)}>
        <PixelSprite map={RIDER_A} className="pixel-pedal-a" />
        <PixelSprite map={RIDER_B} className="pixel-pedal-b" />
        <PixelSprite map={RIDER_LOOK} className="pixel-look" />
        <PixelSprite map={PARCEL} className="pixel-parcel" />
      </div>

      <div className="pixel-dock">
        <PixelSprite map={LOCKER_SHUT} className="pixel-locker-shut" />
        <PixelSprite map={LOCKER_OPEN} className="pixel-locker-open" />
      </div>

      <div className="pixel-hearts">
        {HEART_MIX.map((heart, i) => <PixelSprite map={heart} key={i} />)}
      </div>
    </div>
  );
}
