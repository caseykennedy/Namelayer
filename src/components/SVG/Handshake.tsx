import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill?: string }>`
  .hns-1 {
    fill-rule: evenodd;
    fill: ${(p) => (p.fill ? p.fill : 'var(--color-bg)')};
  }
`

type Props = { fill?: string }

const Handshake = ({ fill }: Props) => (
  <SVG
    width="32"
    viewBox="0 0 40 40"
    initial="hidden"
    animate="visible"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.5229 13.0455L31.9262 8.63358H36.9564C37.0293 8.63717 37.1004 8.65758 37.1633 8.69308C37.2263 8.72859 37.2795 8.77814 37.3182 8.83753L38.3115 10.3807L40 13.0455H34.5229ZM25.2288 39.7893C25.2009 39.8519 25.1545 39.9052 25.0952 39.9427C25.0359 39.9802 24.9664 40.0001 24.8953 40H19.7517L27.7403 26.261C27.7893 26.1767 27.8205 26.0839 27.8321 25.988C27.8436 25.8921 27.8353 25.795 27.8076 25.7022C27.7799 25.6094 27.7335 25.5227 27.6708 25.4471C27.6081 25.3715 27.5305 25.3085 27.4423 25.2617C27.3299 25.2004 27.2029 25.1676 27.0734 25.1666L13.48 25.153L10.7769 20.6662H30.6421H30.7769L30.8691 20.6322H30.9188C31.074 20.5659 31.2032 20.454 31.2877 20.3127L34.5513 14.5275H39.9503L25.2288 39.7893ZM18.4463 39.2658L17.8006 38.2529C16.9776 36.9477 15.9205 35.2753 15.7999 35.0918C15.7706 35.0359 15.7553 34.9742 15.7553 34.9116C15.7553 34.8491 15.7706 34.7874 15.7999 34.7315C15.9986 34.4052 19.6098 28.1645 20.4895 26.6417H25.768L18.4463 39.2658ZM9.42887 30.673L6.80383 26.2067L9.44306 21.448L12.0965 25.8328L9.42887 30.673ZM5.88151 31.3528H3.04363C2.97154 31.3489 2.90137 31.3291 2.8386 31.2949C2.77583 31.2607 2.72217 31.213 2.6818 31.1557L1.83044 29.7961L0 26.9545H5.46293L8.0525 31.3664L5.88151 31.3528ZM14.7783 0.210741C14.8049 0.148668 14.8501 0.0955317 14.9082 0.0580289C14.9662 0.0205261 15.0346 0.00033497 15.1046 0L20.2696 0L12.2597 13.739V13.7729C12.2557 13.7977 12.2557 13.8229 12.2597 13.8477C12.2557 13.8702 12.2557 13.8932 12.2597 13.9157C12.263 13.9383 12.263 13.9611 12.2597 13.9837C12.2597 13.9837 12.2597 14.0381 12.2597 14.0653V14.1264C12.2597 14.1264 12.2597 14.1808 12.2597 14.208C12.2597 14.2352 12.2597 14.2556 12.2597 14.276V14.344C12.2568 14.3666 12.2568 14.3894 12.2597 14.412V14.4731L12.3022 14.5343L12.3519 14.5887L12.4016 14.6363C12.417 14.6556 12.4363 14.6718 12.4583 14.6839L12.5222 14.7247L12.6499 14.7723H12.6924C12.7513 14.7794 12.8109 14.7794 12.8698 14.7723H13.2175H26.4846C26.8393 15.3569 27.492 16.4582 28.0454 17.3963L29.1096 19.1774H9.4005C9.26395 19.1816 9.13084 19.2195 9.01402 19.2874C8.8972 19.3553 8.80061 19.4508 8.73359 19.5649L5.46293 25.4385H0.0780423L14.7783 0.210741ZM21.5892 0.747791L22.0717 1.50238L24.2001 4.90143C24.2311 4.95681 24.2474 5.01871 24.2474 5.08158C24.2474 5.14445 24.2311 5.20634 24.2001 5.26173L19.5176 13.3447H14.2391L21.5892 0.747791ZM30.5782 9.32019L33.1962 13.7933L30.5215 18.552L29.436 16.7301C28.7265 15.4929 28.166 14.5955 27.8609 14.0925L30.5782 9.32019Z"
      fill={fill}
    />
  </SVG>
)

export default Handshake

const defaultProps = {
  fill: 'var(--color-text)',
}

Handshake.defaultProps = defaultProps
