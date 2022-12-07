import { React } from 'react'
import { Card, Skeleton } from 'antd'
import("./CardsLoading.css");

const { Meta } = Card;

const LoadingCards = ({ loadingState }) => {

	return (
		<Card
			className='pokemon-card pokemon-card-load'
			cover={
				<Skeleton.Image
					className='cards-img-skeleton'
					active
				/>
			}
		>
			<Meta
				className='Card-meta-class card-meta-skeleton'
				description={
					<Skeleton
						className='cards-desc-skeleton'
						title={true}
						loading={loadingState}
						active
						paragraph={{
							rows: 3,
						}}
					/>
				}
			/>
		</Card>
	)
}

export default LoadingCards;