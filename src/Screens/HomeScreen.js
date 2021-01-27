import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity} from 'react-native';
import {routes} from '../utils/routes';
import {getBirras} from '../utils/services';

const HomeScreen = ({navigation}) => {
  // const {data, error, isLoading} = useQuery('/beers', getBirras);
  const [data, setData] = useState();
  const itemStyle = {color: 'black', fontSize: 26};

  useEffect(() => {
    async function fetcher() {
      const dataBirras = await getBirras();
      setData(dataBirras);
    }
    fetcher();
  }, []);

  return (
    <React.Fragment>
      <Text>Home page {data && data.length}</Text>
      {data && (
        <FlatList
          keyExtractor={(item, index) => item.name}
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.detailsPage, {id: item.id})
                }>
                <Text style={itemStyle}>
                  {item.name} - {item.id}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      )}

      <Button
        title="Ir a detail"
        onPress={() => navigation.navigate(routes.detailsPage)}
      />
    </React.Fragment>
  );
};

export default HomeScreen;
