import {
    HomeBannerCon,
    BannerButton,
    CrossIcon,
    BannerContent,
    BannerImage,
    BannerText,
    CloseButton,
  } from './StyledComponent'
  
  const HomeBanner = ({closeBanner}) => (
    <HomeBannerCon data-testid="banner">
      <BannerContent>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </BannerContent>
      <CloseButton
        type="button"
        data-testid="close"
        onClick={() => closeBanner()}
      >
        <CrossIcon />
      </CloseButton>
    </HomeBannerCon>
  )
  
  export default HomeBanner
  