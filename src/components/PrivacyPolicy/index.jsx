import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PrivacyPolicyPdf from './assets/Skunks-Privacy-Policy.pdf';
import { Toolbar } from '../../components';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
});

export const PrivacyPolicy = () => {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (evt, page) => {
    evt.preventDefault();
    setPage(page);
  };

  return (
    <>
      <Toolbar />
      <Container classes={{ root: classes.container }}>
        <Document onLoadSuccess={onLoadSuccess} file={PrivacyPolicyPdf}>
          <Page pageNumber={page} />
        </Document>
        <Pagination count={numPages} page={page} onChange={handlePageChange} />
      </Container>
    </>
  );
};
