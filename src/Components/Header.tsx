import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, IconButton, Link, Tooltip } from '@mui/material';
import { LinkedIn, GitHub, Phone, GetApp, StickyNote2Sharp } from '@mui/icons-material';

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

// Styled link for the name
const NameLink = styled('a')`
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-right: 10px;
  tooltip: {'Sammy Dev Resume Download'}
`;

// Styled link for the phone number
const PhoneLink = styled('a')`
  text-decoration: none;
  color: black;
`;

interface HeaderProps {
  name: string;
  phoneNumber: string;
  title: string;
  githubLink?: string;
  linkedinLink?: string;
  skypeLink?: string;
  fileName: string;
}

const Header: React.FC<HeaderProps> = ({ name, phoneNumber, title, githubLink, linkedinLink, skypeLink, fileName }) => {

  // Function to handle file download
  const handleDownload = () => {
    console.log('Download resume');
    
    // Replace 'example.docx' with the name of your Word document
    const fileUrl = `${process.env.PUBLIC_URL}/${fileName}.docx`;

    // Create a link element
    const link = document.createElement('a');
    link.href = fileUrl;

    // Set the download attribute to specify the filename
    link.setAttribute('download', fileName);
    link.setAttribute('target', '_blank');

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event to initiate the download
    link.click();

    // Remove the link from the document body after download
    document.body.removeChild(link);
  };

  return (
    <HeaderContainer position="static">
      <HeaderContent>
        <LeftContent>
          <Tooltip title="Download Resume as a Word Document">
            <NameLink href="#" onClick={handleDownload}>
              {name}
            </NameLink> 
          </Tooltip>
          <PhoneLink href={`tel:${phoneNumber}`}>
            <Phone />
            {phoneNumber}
          </PhoneLink>
        </LeftContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <RightContent>
          {githubLink && (
            <Tooltip title="Get source code for this AI resume reviwer on GitHub">
              <IconButton color="inherit" href={githubLink} target="_blank" rel="noopener noreferrer">
                <GitHub />
              </IconButton>
            </Tooltip>
          )}
          {linkedinLink && (
            <Tooltip title="LinkedIn">
              <IconButton color="inherit" href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </IconButton>
            </Tooltip>
          )}
          {skypeLink && (
            <Tooltip title="Skype">
              <IconButton color="inherit" href={skypeLink} target="_blank" rel="noopener noreferrer">
                <StickyNote2Sharp />
              </IconButton>
            </Tooltip>
          )}
        </RightContent>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
