import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Swiper from 'swiper';
import SectionHeader from '../SectionHeader/SectionHeader';
import useStyles from './useStyles';
import CardReview from './CardReview/CardReview';
import IconAlternate from '../IconAlternate/IconAlternate'
import ReviewImage from '../../Images/profilePic.png';
import { Review } from '../../interface/User';
import { getAllReviews } from '../../helpers/APICalls/review';
import { colors } from '@material-ui/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

interface Props {
  className?: string;
}

const reviewsTest = [
  {
    reviewerPhoto: {
      src: ReviewImage,
      srcSet: ReviewImage,
    },
    reviewerName: 'Tyler Bolty',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    reviewerPhoto: {
      src: ReviewImage,
      srcSet: ReviewImage,
    },
    reviewerName: 'Brian Ford',
    feedback:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    reviewerPhoto: {
      src: ReviewImage,
      srcSet: ReviewImage,
    },
    reviewerName: 'Jeewan',
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const SplashReviews = ({ className }: Props): JSX.Element => {
  const [reviews, setReviews] = useState<Review[]>()
  const classes = useStyles();

  const getReviews = async () => {
    const getAll = await getAllReviews();

    if (getAll) {
      setReviews(getAll);
    } else {
      new Error('Could Not Get Reviews');
    }
  }

  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },
      autoplay: {
        delay: 2000,
      },
    });

    getReviews();
  }, []);

  return (
    <div className={classes.wrapper}>
      <SectionHeader title="Customer Reviews" subtitle="Take a look at some of our recent contest creators feedback." />
      <div className={clsx('swiper-container', classes.swiperContainer)}>
        <div className="swiper-wrapper">
          {reviews ? reviews.map((review: any, index: number) => (
            <>
            <CardReview
              key={review.text}
              className={'swiper-slide'}
              noBorder
              text={review.text}
              icon={
                <IconAlternate
                  color='black'
                  fontIconClass="fas fa-quote-right"
                />
              }
              reviewerName={review.reviewerId.username}
              reviewerTitle={review.reviewerContestType}
              reviewerPhoto={review.reviewerId.profilePic}
            />
          <div className="swiper-pagination" />
            </>
          )) : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default SplashReviews;
