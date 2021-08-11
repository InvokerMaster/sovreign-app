export const __DEV__ = process.env.NODE_ENV !== "production";

export const INFURA_ID = "TODO";

export enum SupportedChainId {
  MAINNET = 1,
  RINKEBY = 4,
}

export interface ChainInfo {
  explorer: string;
  label: string;
}

export const CHAIN_INFO: Record<SupportedChainId, ChainInfo> = {
  [SupportedChainId.MAINNET]: {
    explorer: "https://etherscan.io/",
    label: "Mainnet",
  },
  [SupportedChainId.RINKEBY]: {
    explorer: "https://rinkeby.etherscan.io/",
    label: "Rinkeby",
  },
};

type ContractNames =
  | "BasketBalancer"
  | "PoolRouter"
  | "WrappingRewards"
  | "ReignFacet"
  | "GovRewards"
  | "LPRewardsSOVUSDC"
  | "LPRewardsREIGNWETH";

type TokenNames = "SOV" | "REIGN" | "SOV_USDC" | "REIGN_ETH";

export const CONTRACT_ADDRESSES: Record<
  ContractNames,
  Record<SupportedChainId, string>
> = {
  BasketBalancer: {
    [SupportedChainId.MAINNET]: "TODO",
    [SupportedChainId.RINKEBY]: "0xcab995251e50d310a4a924378c9ecde5032d75e0",
  },
  PoolRouter: {
    [SupportedChainId.MAINNET]: "TODO",
    [SupportedChainId.RINKEBY]: "0x89e0da559126aa5ca804d4c7c30715522031b92b",
  },
  WrappingRewards: {
    [SupportedChainId.MAINNET]: "TODO",
    [SupportedChainId.RINKEBY]: "0x855dD13AbAb0e891952Fd973634cefBb1c5AAbAC",
  },
  ReignFacet: {
    [SupportedChainId.MAINNET]: "TODO",
    [SupportedChainId.RINKEBY]: "0xc31cb4f82f178ea0377492144035c48de119a4f8",
  },
  GovRewards: {
    [SupportedChainId.MAINNET]: "TODO",
    [SupportedChainId.RINKEBY]: "0x923CA1b060577e8BcDF6d82A9C4109CEECCc1122",
  },
  LPRewardsREIGNWETH: {
    [SupportedChainId.MAINNET]: "TOOD",
    [SupportedChainId.RINKEBY]: "0x4cdf326f0cecf20c1b759c60590839e92e1b4d29",
  },
  LPRewardsSOVUSDC: {
    [SupportedChainId.MAINNET]: "TODO",
    [SupportedChainId.RINKEBY]: "0x04f47aa96c1f2018e7cd6df7b07b55d1c57cdaf4",
  },
};

export const TOKEN_ADDRESSES: Record<
  TokenNames,
  Record<SupportedChainId, string>
> = {
  SOV: {
    [SupportedChainId.MAINNET]: "TODO",
    [SupportedChainId.RINKEBY]: "0xfbebceb1fc57b05b2bd845d936ea23ae60861584",
  },
  REIGN: {
    [SupportedChainId.MAINNET]: "TODO",
    [SupportedChainId.RINKEBY]: "0x08188FC7d8F552d1D8F8d2743404e9E728425AE1",
  },
  SOV_USDC: {
    [SupportedChainId.MAINNET]: "TODO",
    [SupportedChainId.RINKEBY]: "0xd2805867258db181b608dbc757a1ce363b71c45f",
  },
  REIGN_ETH: {
    [SupportedChainId.MAINNET]: "TODO",
    [SupportedChainId.RINKEBY]: "0x1ef52788392d940a39d09ac26cfe3c3a6f6fae47",
  },
};

export const POOL_ADDRESS: Record<SupportedChainId, string> = {
  [SupportedChainId.MAINNET]: "TODO",
  [SupportedChainId.RINKEBY]: "0x27104Bda81e14697240Cd74161A21EeE8FA00284",
};

export const TOKEN_NAMES_BY_ADDRESS: Record<string, string> = {
  "0x712863c3ad98ef4319133b8646d51383700cb37b": "sCHF",
  "0xf65c93902ecc4c7979e92ed2cca01421e8021f77": "sBTC",
  "0x3a85973fd194c9fb966882fee7b11481c38344fb": "sXAU",
};

export const MaxUint256 = BigInt(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);

export const EPOCH_DURATION = 604800;
