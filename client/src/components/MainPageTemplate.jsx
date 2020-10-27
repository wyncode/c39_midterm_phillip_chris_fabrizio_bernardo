import React from 'react';
import SearchForm from './Search/SearchForm';
import PlayerCard from './Card/PlayerCard';
import Row from 'react-bootstrap/Row';

const MainPageTemplate = () => {
    return (
    <>
        <SearchForm />
        {/* <Row>
          <PlayerCard />
          <PlayerCard />
        </Row> */}
    </>
    );
};

export default MainPageTemplate;