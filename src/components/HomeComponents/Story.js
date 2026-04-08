/* eslint-disable no-sparse-arrays */
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';

// ✅ Dummy Data
const storyData = [
  {
    id: '1',
    username: 'You',
    isMyStory: true,
    isSeen: false,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    username: 'Aminul',
    isSeen: false,
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    username: 'Rahul',
    isSeen: true,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    username: 'John',
    isSeen: false,
    avatar: 'https://i.pravatar.cc/150?img=4',
  },

  {
    id: '5',
    username: 'Iman',
    isSeen: false,
    avatar: 'https://i.pravatar.cc/150?img=5',
  },

  {
    id: '6',
    username: 'Sahar',
    isSeen: false,
    avatar: 'https://i.pravatar.cc/150?img=6',
  },

  {
    id: '7',
    username: 'Sarif',
    isSeen: false,
    avatar: 'https://i.pravatar.cc/150?img=7',
  },

  {
    id: '8',
    username: 'Reki',
    isSeen: true,
    avatar: 'https://i.pravatar.cc/150?img=8',
  },

  {
    id: '9',
    username: 'Rakib',
    isSeen: true,
    avatar: 'https://i.pravatar.cc/150?img=9',
  },

  {
    id: '10',
    username: 'islam',
    isSeen: true,
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
];

// ✅ Story Item
const StoryItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.storyItem}>
      {/* Avatar Container */}
      <View
        style={[
          styles.avatarWrapper,
          {
            borderColor: item.isSeen ? '#374151' : '#d8d100', // yellow if new
          },
        ]}
      >
        <Image source={{ uri: item.avatar }} style={styles.avatar} />

        {/* ➕ Add Story */}
        {item.isMyStory && (
          <View style={styles.addIcon}>
            <Ionicons name="add" size={14} color="#fff" />
          </View>
        )}
      </View>

      {/* Username */}
      <Text style={styles.username} numberOfLines={1}>
        {item.username}
      </Text>
    </TouchableOpacity>
  );
};

// ✅ Main Component
const Story = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={storyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <StoryItem item={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },

  list: {
    paddingHorizontal: 10,
  },

  storyItem: {
    alignItems: 'center',
    marginRight: 14,
    width: 70,
  },

  avatarWrapper: {
    width: 65,
    height: 65,
    borderRadius: 40,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 30,
  },

  username: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },

  addIcon: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#3b82f6',
    borderRadius: 10,
    padding: 2,
  },
});
