import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useAppContext } from '../../context/AppContext';
import { COLORS } from '../../constants/Colors';
const now = new Date();

//Importante that when save publish date this must save like const date=new Date().toISOString()
//console.log(new Date().toISOString())
//'2026-04-05T08:44:21.996Z'

const postData = [
  {
    id: '1',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=1',
      text: '',
    },
    username: 'amie',
    description: 'Morning vibes 🌅',
    like: '120',
    comment: '12',
    repost: '4',
    send: '8',
    isSave: false,
    isLiked: false,
    isRepost: false,
    publishDate: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(),
  },

  {
    id: '2',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=2',
      text: '',
    },
    username: 'reki',
    description: 'Chilling with friends 😎',
    like: '98',
    comment: '7',
    repost: '2',
    send: '5',
    isSave: true,
    isLiked: true,
    isRepost: false,
    publishDate: new Date(now.getTime() - 3 * 60 * 60 * 1000).toISOString(),
  },

  {
    id: '3',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=3',
      text: '',
    },
    username: 'rahul',
    description: 'Workout done 💪',
    like: '210',
    comment: '25',
    repost: '6',
    send: '12',
    isSave: false,
    isLiked: true,
    isRepost: true,
    publishDate: new Date(now.getTime() - 5 * 60 * 60 * 1000).toISOString(),
  },

  {
    id: '4',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=4',
      text: '',
    },
    username: 'john',
    description: 'City lights 🌃',
    like: '340',
    comment: '40',
    repost: '10',
    send: '15',
    isSave: true,
    isLiked: false,
    isRepost: false,
    publishDate: new Date(now.getTime() - 6 * 60 * 60 * 1000).toISOString(),
  },

  {
    id: '5',
    content: {
      type: 'text',
      url: '',
      text: `This project is a modern social media mobile application built using React Native. It focuses on delivering a smooth and engaging user experience with features inspired by popular platforms like Instagram and Threads.

The application includes authentication functionality, allowing users to securely sign up, log in, and maintain their session using AsyncStorage and context-based state management.

The core feature of the app is a dynamic post feed where users can view different types of content such as images and text posts. Each post is designed with a clean UI and includes interactive elements like likes, comments, reposts, and save options. The application intelligently handles content rendering using a structured data format, making it scalable and easy to extend for future features like videos or multiple media posts.

Additionally, the app supports dark mode and light mode themes, enhancing user accessibility and personalization. The UI components are built with a focus on responsiveness and modern design principles, ensuring consistency across devices.

Features like time-based post display (e.g., 2 hours ago) and optimized rendering further improve usability.

Overall, this project demonstrates strong fundamentals in React Native development, state management, UI design, and real-world app architecture.`,
    },
    username: 'iman',
    description: 'Coffee time ☕',
    like: '76',
    comment: '5',
    repost: '1',
    send: '3',
    isSave: false,
    isLiked: false,
    isRepost: false,
    publishDate: new Date(now.getTime() - 7 * 60 * 60 * 1000).toISOString(),
  },

  // 🔥 Days

  {
    id: '6',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=6',
      text: '',
    },
    username: 'sahar',
    description: 'Beach day 🌊',
    like: '500',
    comment: '60',
    repost: '12',
    send: '20',
    isSave: true,
    isLiked: true,
    isRepost: true,
    publishDate: new Date(
      now.getTime() - 1 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  },

  {
    id: '7',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=7',
      text: '',
    },
    username: 'sarif',
    description: 'New outfit 👕',
    like: '190',
    comment: '18',
    repost: '3',
    send: '7',
    isSave: false,
    isLiked: true,
    isRepost: false,
    publishDate: new Date(
      now.getTime() - 2 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  },

  {
    id: '8',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=8',
      text: '',
    },
    username: 'rakib',
    description: 'Gaming night 🎮',
    like: '220',
    comment: '30',
    repost: '5',
    send: '9',
    isSave: true,
    isLiked: false,
    isRepost: false,
    publishDate: new Date(
      now.getTime() - 3 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  },

  {
    id: '9',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=9',
      text: '',
    },
    username: 'islam',
    description: 'Nature walk 🌿',
    like: '410',
    comment: '33',
    repost: '8',
    send: '11',
    isSave: false,
    isLiked: true,
    isRepost: true,
    publishDate: new Date(
      now.getTime() - 7 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  },

  {
    id: '10',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=10',
      text: '',
    },
    username: 'alex',
    description: 'Sunset love ❤️',
    like: '600',
    comment: '70',
    repost: '15',
    send: '25',
    isSave: true,
    isLiked: true,
    isRepost: true,
    publishDate: new Date(
      now.getTime() - 30 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  },

  {
    id: '11',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=11',
      text: '',
    },
    username: 'mike',
    description: 'Old memories 🕰️',
    like: '340',
    comment: '22',
    repost: '6',
    send: '10',
    isSave: false,
    isLiked: false,
    isRepost: false,
    publishDate: new Date(
      now.getTime() - 365 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  },
  {
    id: '12',
    content: {
      type: 'text',
      url: '',
      text: 'Late night coding 💻✨',
    },
    username: 'devraj',
    description: 'Debugging life 😅',
    like: '145',
    comment: '10',
    repost: '3',
    send: '6',
    isSave: false,
    isLiked: true,
    isRepost: false,
    publishDate: new Date(now.getTime() - 9 * 60 * 60 * 1000).toISOString(),
  },

  {
    id: '13',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=13',
      text: '',
    },
    username: 'maya',
    description: 'Golden hour 🌇',
    like: '320',
    comment: '28',
    repost: '6',
    send: '11',
    isSave: true,
    isLiked: true,
    isRepost: false,
    publishDate: new Date(now.getTime() - 11 * 60 * 60 * 1000).toISOString(),
  },

  {
    id: '14',
    content: {
      type: 'text',
      url: '',
      text: 'Consistency beats motivation 💯',
    },
    username: 'rahul',
    description: 'Daily grind 🚀',
    like: '210',
    comment: '18',
    repost: '5',
    send: '9',
    isSave: true,
    isLiked: true,
    isRepost: true,
    publishDate: new Date(now.getTime() - 14 * 60 * 60 * 1000).toISOString(),
  },

  {
    id: '15',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=15',
      text: '',
    },
    username: 'john',
    description: 'Street vibes 🚶‍♂️',
    like: '275',
    comment: '22',
    repost: '4',
    send: '10',
    isSave: false,
    isLiked: false,
    isRepost: false,
    publishDate: new Date(now.getTime() - 18 * 60 * 60 * 1000).toISOString(),
  },

  {
    id: '16',
    content: {
      type: 'text',
      url: '',
      text: 'Small steps everyday 👣',
    },
    username: 'sara',
    description: 'Growth mindset 🌱',
    like: '190',
    comment: '15',
    repost: '3',
    send: '7',
    isSave: true,
    isLiked: true,
    isRepost: false,
    publishDate: new Date(now.getTime() - 22 * 60 * 60 * 1000).toISOString(),
  },

  {
    id: '17',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=17',
      text: '',
    },
    username: 'leo',
    description: 'Travel diaries ✈️',
    like: '410',
    comment: '35',
    repost: '9',
    send: '16',
    isSave: true,
    isLiked: true,
    isRepost: true,
    publishDate: new Date(now.getTime() - 26 * 60 * 60 * 1000).toISOString(),
  },

  {
    id: '18',
    content: {
      type: 'text',
      url: '',
      text: 'Silence is also an answer 🤫',
    },
    username: 'nina',
    description: 'Peaceful mind 🧘‍♀️',
    like: '230',
    comment: '20',
    repost: '4',
    send: '8',
    isSave: false,
    isLiked: true,
    isRepost: false,
    publishDate: new Date(
      now.getTime() - 2 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  },

  {
    id: '19',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=19',
      text: '',
    },
    username: 'alex',
    description: 'Night drive 🌙🚗',
    like: '360',
    comment: '30',
    repost: '7',
    send: '12',
    isSave: true,
    isLiked: false,
    isRepost: false,
    publishDate: new Date(
      now.getTime() - 3 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  },

  {
    id: '20',
    content: {
      type: 'text',
      url: '',
      text: 'Dream big, start small 🚀',
    },
    username: 'mike',
    description: 'Stay focused 🎯',
    like: '300',
    comment: '25',
    repost: '6',
    send: '10',
    isSave: true,
    isLiked: true,
    isRepost: true,
    publishDate: new Date(
      now.getTime() - 5 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  },

  {
    id: '21',
    content: {
      type: 'image',
      url: 'https://picsum.photos/400/400?random=21',
      text: '',
    },
    username: 'emma',
    description: 'Food love 🍕❤️',
    like: '520',
    comment: '45',
    repost: '11',
    send: '18',
    isSave: true,
    isLiked: true,
    isRepost: true,
    publishDate: new Date(
      now.getTime() - 10 * 24 * 60 * 60 * 1000,
    ).toISOString(),
  },
];

export const getTimeAgo = publishDate => {
  const now = new Date();
  const past = new Date(publishDate);

  const diffMs = now - past;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return `${seconds}s ago`;
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;

  return `${years} year${years > 1 ? 's' : ''} ago`;
};

// ✅ Header
const PostHeader = ({ item, theme }) => (
  <View style={styles.postHeader}>
    <View style={styles.headerLeft}>
      <View style={styles.avatar}>
        <Text style={{ color: '#fff' }}>{item.username[0].toUpperCase()}</Text>
      </View>
      <Text style={[styles.username, { color: theme.text }]}>
        {item.username}
      </Text>
    </View>

    <Ionicons name="ellipsis-horizontal" size={18} color={theme.text} />
  </View>
);

// ✅ Content (text,image,video)
const PostContent = ({ item, theme }) => {
  const { type, url, text = '' } = item.content;

  switch (type) {
    case 'text': {
      const isLongText = text.length > 150;

      return (
        <View
          style={[
            styles.postTextContainer,
            { backgroundColor: theme.background },
          ]}
        >
          <View style={[styles.textCard,{backgroundColor:`${theme.card}`}]}>
            {isLongText ? (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
              >
                <Text
                  style={[
                    styles.postText,
                    { color: theme.text, textAlign: 'left' },
                  ]}
                >
                  {text}
                </Text>
              </ScrollView>
            ) : (
              <Text
                style={[
                  styles.postText,
                  { color: theme.text, textAlign: 'center' },
                ]}
              >
                {text}
              </Text>
            )}
          </View>
        </View>
      );
    }

    case 'image':
      return <Image source={{ uri: url }} style={styles.postImage} />;

    case 'video':
      return (
        <View style={styles.postVideo}>
          <Text style={{ color: theme.text }}>Video Coming Soon 🎬</Text>
        </View>
      );

    default:
      return null;
  }
};

// ✅ Footer
const PostFooter = ({ item, theme }) => (
  <View style={styles.postFooter}>
    {/* Icons Row */}
    <View style={styles.postFooterIcon}>
      <View style={styles.postFooterIconRow}>
        <Ionicons
          name={item.isLiked ? 'heart' : 'heart-outline'}
          size={22}
          color={item.isLiked ? 'red' : theme.text}
        />

        <Ionicons name="chatbubble-outline" size={22} color={theme.text} />

        <Ionicons name="repeat-outline" size={22} color={theme.text} />

        <Ionicons name="paper-plane-outline" size={22} color={theme.text} />
      </View>

      <Ionicons
        name={item.isSave ? 'bookmark' : 'bookmark-outline'}
        size={22}
        color={theme.text}
      />
    </View>

    {/* Likes */}
    <Text style={[styles.likes, { color: theme.text }]}>{item.like} likes</Text>

    {/* Description */}
    <Text style={{ color: theme.text }}>
      <Text style={{ fontWeight: 'bold' }}>{item.username} </Text>
      {item.description}
    </Text>

    {/* Time */}
    <Text style={styles.time}>{getTimeAgo(item.publishDate)}</Text>
  </View>
);

// ✅ Main Component
const Post = () => {
  const { isDarkMode } = useAppContext();
  const theme = isDarkMode ? COLORS.dark : COLORS.light;
const renderItem = ({ item }) => (
  <View style={{ marginBottom: 20 }}>
    <PostHeader item={item} theme={theme} />
    <PostContent item={item} theme={theme} />
    <PostFooter item={item} theme={theme} />
  </View>
);
  return (
   <FlatList
  data={postData}
  keyExtractor={item => item.id}
  renderItem={renderItem}
  showsVerticalScrollIndicator={false}
  style={{ backgroundColor: theme.background }}
  initialNumToRender={5}
  maxToRenderPerBatch={5}
  windowSize={5}
/>
  );
};

export default Post;

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
  },

  username: {
    fontWeight: '600',
  },
  postTextContainer: {
    width: '100%',
    minHeight: 250,
    maxHeight: 350,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  textCard: {
    maxWidth: '90%',
    maxHeight: 260,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#1e293b',
    elevation: 3, // Android shadow
  },

  scrollContent: {
    paddingBottom: 10, // 👈 smooth scroll end
  },

  postText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
  },

  postImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  postVideo: {
    width: '100%',
    height: 350,
  },
  postFooter: {
    padding: 10,
  },

  postFooterIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  postFooterIconRow: {
    flexDirection: 'row',
    gap: 14,
  },

  likes: {
    fontWeight: '600',
    marginBottom: 4,
  },

  time: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 4,
  },
});
