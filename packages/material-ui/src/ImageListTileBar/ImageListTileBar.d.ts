import * as React from 'react';
import { InternalStandardProps as StandardProps } from '..';

export interface ImageListTileBarProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon?: React.ReactNode;
  /**
   * Position of secondary action IconButton.
   */
  actionPosition?: 'left' | 'right';
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the root element if `titlePosition="bottom"`. */
    titlePositionBottom?: string;
    /** Styles applied to the root element if `titlePosition="top"`. */
    titlePositionTop?: string;
    /** Styles applied to the root element if a `subtitle` is provided. */
    rootSubtitle?: string;
    /** Styles applied to the title and subtitle container element. */
    titleWrap?: string;
    /** Styles applied to the container element if `actionPosition="left"`. */
    titleWrapActionPosLeft?: string;
    /** Styles applied to the container element if `actionPosition="right"`. */
    titleWrapActionPosRight?: string;
    /** Styles applied to the title container element. */
    title?: string;
    /** Styles applied to the subtitle container element. */
    subtitle?: string;
    /** Styles applied to the actionIcon if supplied. */
    actionIcon?: string;
    /** Styles applied to the actionIcon if `actionPosition="left"`. */
    actionIconActionPosLeft?: string;
  };
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle?: React.ReactNode;
  /**
   * Title to be displayed on tile.
   */
  title?: React.ReactNode;
  /**
   * Position of the title bar.
   */
  titlePosition?: 'top' | 'bottom';
}

export type ImageListTileBarClassKey = keyof NonNullable<ImageListTileBarProps['classes']>;

/**
 *
 * Demos:
 *
 * - [Image List](https://material-ui.com/components/image-list/)
 *
 * API:
 *
 * - [ImageListTileBar API](https://material-ui.com/api/image-list-tile-bar/)
 */
export default function ImageListTileBar(props: ImageListTileBarProps): JSX.Element;
