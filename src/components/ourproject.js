import React from "react";
import Slider from '@farbenmeer/react-spring-slider';

const OurProject = () => (
	<div className="row divProject">
		<Slider auto={3000} activeIndex={2}>
				<div>
				    <img src="http://nhim.design/upload/post/gallery/07052019220514.jpeg" className="img-responsive" alt="Nhim design"/>
				</div>
				<div>
					<img src="http://nhim.design/upload/post/gallery/07052019220514.jpeg" className="img-responsive" alt="Nhim design"/>
				</div>
				<div>
					<img src="http://nhim.design/upload/post/gallery/07052019220514.jpeg" className="img-responsive" alt="Nhim design"/>
				</div>
		</Slider>
	</div>
)

export default OurProject