import { NavigatorScreenParams } from '@react-navigation/native';

export type BottomTabParamList = {
  ProductTab: undefined;
  ProfileTab: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  MainTabs: NavigatorScreenParams<BottomTabParamList>;
  ProductDetail: { productId: number; title: string };
};
