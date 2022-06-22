/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  ColorValue,
  FlatList,
  FlatListProps,
  RefreshControl,
} from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface IProps extends FlatListProps<any> {
  isAnimated: boolean;
  isLoading: boolean;
  isLoadmore: boolean;
  isRefreshing: boolean;
  hasMore: boolean;
  loadingPlaceHolder: (() => JSX.Element) | null;
  getUniqueKey: (item: any, index: number) => string;
  refreshTintColor?: ColorValue | undefined;
  loadingColor?: ColorValue | undefined;
}

export const KBFlatList = ({
  isAnimated = false,
  isLoading = false,
  isLoadmore = false,
  isRefreshing = false,
  onRefresh = () => {},
  hasMore = false,
  loadingPlaceHolder = null,
  contentContainerStyle,
  onEndReached,
  getUniqueKey,
  refreshTintColor,
  loadingColor,
  ...props
}: IProps) => {
  const ListCom = isAnimated ? AnimatedFlatList : FlatList;
  const offset = useRef({ onEndReachedCalledDuringMomentum: true }).current;

  const renderListFooter = () => {
    if (isLoadmore) {
      return (
        <ActivityIndicator
          size="small"
          style={{ marginVertical: 10 }}
          color={loadingColor}
        />
      );
    }
    return null;
  };

  const handleOnEndReached = (info: { distanceFromEnd: number }) => {
    if (!hasMore || !onEndReached) {
      return;
    }
    if (offset.onEndReachedCalledDuringMomentum) {
      return;
    }
    offset.onEndReachedCalledDuringMomentum = true;
    onEndReached?.(info);
  };

  if (isLoading) {
    if (loadingPlaceHolder) {
      return loadingPlaceHolder();
    }
    return (
      <ActivityIndicator
        size="small"
        style={{ marginTop: 20 }}
        color={loadingColor}
      />
    );
  }

  return (
    <ListCom
      keyExtractor={(item, index) =>
        getUniqueKey ? getUniqueKey(item, index) : String(index)
      }
      ListFooterComponent={renderListFooter}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
      {...(onRefresh && {
        refreshControl: (
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={refreshTintColor}
          />
        ),
      })}
      {...(onEndReached && {
        onEndReachedThreshold: 0.1,
        onEndReached: handleOnEndReached,
      })}
      onMomentumScrollBegin={() => {
        offset.onEndReachedCalledDuringMomentum = false;
      }}
      {...(isAnimated && {
        scrollEventThrottle: 16,
      })}
      {...props}
    />
  );
};
