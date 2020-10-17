import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCancel=true }) => {
  const { navigate, goBack } = useNavigation();

  function handleCloseAllTabsAndGoToOrphanagesMap() {
    navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#15b5d6" />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>

      <BorderlessButton onPress={handleCloseAllTabsAndGoToOrphanagesMap}>
        {showCancel && (
          <Feather name="x" size={24} color="#ff969d" />
        )}
      </BorderlessButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16,
  }
})

export default Header;