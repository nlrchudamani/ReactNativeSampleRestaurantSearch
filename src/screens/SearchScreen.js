import React ,{ useState } from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    console.log(results)

    const filterResult = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    }
    return (
        < >
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
   
            <ScrollView>
                <ResultsList results={ filterResult('$')} headerText="Cost Effective"/>
                <ResultsList results={ filterResult('$$')} headerText="Bit Pricer"/>
                <ResultsList results={filterResult('$$$')} headerText="Big Spender" />
                <ResultsList results={filterResult('$$')} headerText="Bit Pricer" />
                <ResultsList results={ filterResult('$')} headerText="Cost Effective"/>
            </ScrollView>
            
        </>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;
