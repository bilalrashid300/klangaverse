import React from "react";
import styled from "styled-components";
import ProfileBannerImage from "assets/images/profile_banner.png";
import ProfileImage from "assets/images/profile_image.png";

const Container = styled.div`
  position: relative;
  height: 142px;
  background: linear-gradient(
      90deg,
      rgba(255, 81, 47, 0.2) 0%,
      rgba(240, 152, 25, 0.2) 100%
    ),
    url(${ProfileBannerImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .profile_image {
    position: absolute;
    left: 42px;
    bottom: -88px;
    width: 149px;
    height: 149px;
    border-radius: 74.5px;
  }
  @media (max-width: 1060px) {
    background: none;
    .profile_image {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const ProfileBanner = () => {
  return (
    <Container>
      <img className="profile_image" src={ProfileImage} alt="User profile" />
    </Container>
  );
};

export default ProfileBanner;
