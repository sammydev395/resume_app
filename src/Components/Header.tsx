import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, IconButton, Link, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SkypeIcon from '@mui/icons-material/StickyNote2Sharp';

// Styled container for the header
const HeaderContainer = styled(AppBar)`
  background-color: #2196f3;
`;

// Styled div for the header content
const HeaderContent = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

// Styled div for the name & phone number link
const LeftContent = styled('div')`
  display: flex;
  align-items: center;
`;

// Styled div for the icon links
const RightContent = styled('div')`
  display: flex;
  align-items: center;
`;

interface HeaderProps {
  name: string;
  phoneNumber: string;
  title: string;
  githubLink?: string;
  linkedinLink?: string;
  skypeLink?: string;
}

const Header: React.FC<HeaderProps> = ({ name, phoneNumber, title, githubLink, linkedinLink, skypeLink }) => {
  return (
    <HeaderContainer position="static">
      <HeaderContent>
        <LeftContent>
          {name} &nbsp;
          <Link href={`tel:${phoneNumber}`} color="inherit" underline="hover">
           {phoneNumber}
          </Link>
        </LeftContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <RightContent>
          {githubLink && (
            <Tooltip title="Get source code for this AI resume reviwer on GitHub">
              <IconButton color="inherit" href={githubLink} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          )}
          {linkedinLink && (
            <Tooltip title="LinkedIn">
              <IconButton color="inherit" href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
          )}
          {skypeLink && (
            <Tooltip title="Skype">
              <IconButton color="inherit" href={skypeLink} target="_blank" rel="noopener noreferrer">
                <SkypeIcon />
              </IconButton>
            </Tooltip>
          )}
        </RightContent>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
