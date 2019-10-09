export const enum PatchFlags{
    TEXT = 1,
    CLASS = 1<<1,
    STYLE = 1<<2,
    PROPS = 1<<3,
    FULL_PROPS = 1<<4,
    NEED_PATCH = 1<<5,
    KEYED_FRAGMENT = 1<<6,
    UNKEYED_FRAGMENT = 1<<7,
    DYNAMIC_SLOTS = 1 << 8,
    BAIL = -1
}

export const PatchFlagNames = {
  [PatchFlags.TEXT]: `TEXT`,
  [PatchFlags.CLASS]: `CLASS`,
  [PatchFlags.STYLE]: `STYLE`,
  [PatchFlags.PROPS]: `PROPS`,
  [PatchFlags.NEED_PATCH]: `NEED_PATCH`,
  [PatchFlags.FULL_PROPS]: `FULL_PROPS`,
  [PatchFlags.KEYED_FRAGMENT]: `KEYED_FRAGMENT`,
  [PatchFlags.UNKEYED_FRAGMENT]: `UNKEYED_FRAGMENT`,
  [PatchFlags.DYNAMIC_SLOTS]: `DYNAMIC_SLOTS`,
  [PatchFlags.BAIL]: `BAIL`
}