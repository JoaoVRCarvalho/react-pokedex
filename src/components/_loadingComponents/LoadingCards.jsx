import { React } from 'react'
import { Card, Skeleton } from 'antd'
import("./LoadingCards.css");

const { Meta } = Card;

const LoadingCards = ({ isRef }) => {

	if (isRef) {
		return (
			<Card
				className='pokemon-card pokemon-card-load'
				cover={
					<Skeleton.Image
						className='cards-img-skeleton'
					/>
				}
			>

				<Meta
					className='Card-meta-class card-meta-skeleton'
					description={
						<Skeleton
							className='cards-desc-skeleton'
							size={"large"}
							title={true}
							paragraph={{
								rows: 3,
							}}
						/>
					}
				/>
			</Card>
		)
	} else {
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
							size={"large"}
							title={true}
							paragraph={{
								rows: 3,
							}}
							active
						/>
					}
				/>
			</Card>
		)
	}
}

export default LoadingCards;