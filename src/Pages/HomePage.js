import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {routes} from '../utils/routes';
import {getBirras} from '../utils/services';

const HomePage = ({navigation}) => {
  const {data, error, isLoading} = useQuery('/beers', getBirras);
  const itemStyle = {color: 'black', fontSize: 26};
  //   useEffect(() => {
  //     getBirras().then((res) => console.log('en usefect', res));
  //   }, []);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  if (error) {
    return <Text>Error al cargas birras</Text>;
  }

  return (
    <View>
      <Text>Home page {data && data.length}</Text>
      {data && (
        <FlatList
          keyExtractor={(item, index) => item.name}
          data={data}
          renderItem={({item}) => {
            return (
              <Text style={itemStyle}>
                {item.name} - {item.id}
              </Text>
            );
          }}
        />
      )}

      <Button
        title="Ir a detail"
        onPress={() => navigation.navigate(routes.detailsPage)}
      />
    </View>
  );
};

export default HomePage;
