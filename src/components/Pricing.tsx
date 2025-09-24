import React from 'react';
import { PricingSection } from '@/components/ui/pricing';

const Pricing = () => {
	const PLANS = [
		{
			id: 'basic',
			name: 'Plan Name 1',
			info: 'Plan Description here',
			price: {
				monthly: 7,
				yearly: Math.round(7 * 12 * (1 - 0.12)),
			},
			features: [
				{ text: 'Feature 1', limit: '100 items' },
				{ text: 'Feature 2' },
				{ text: 'Feature 3' },
				{
					text: 'Feature 4',
					tooltip: 'Add a helpful description for this feature',
				},
				{
					text: 'Feature 5',
					tooltip: 'Add a helpful description for this feature',
				},
				{
					text: 'Feature 6',
					tooltip: 'Add a helpful description for this feature',
				},
			],
			btn: {
				text: 'Get Started',
				href: '#',
			},
		},
		{
			highlighted: true,
			id: 'pro',
			name: 'Plan Name 2',
			info: 'Plan Description here',
			price: {
				monthly: 17.99,
				yearly: Math.round(17.99 * 12 * (1 - 0.12)),
			},
			features: [
				{ text: 'Feature 1', limit: '500 items' },
				{ text: 'Feature 2' },
				{ text: 'Feature 3' },
				{
					text: 'Feature 4',
					tooltip: 'Add a helpful description for this feature',
				},
				{ text: 'Feature 5' },
				{ text: 'Feature 6', tooltip: 'Add a helpful description for this feature' },
				{
					text: 'Feature 7',
					tooltip: 'Add a helpful description for this feature',
				},
			],
			btn: {
				text: 'Get Started',
				href: '#',
			},
		},
		{
			name: 'Plan Name 3',
			info: 'Plan Description here',
			price: {
				monthly: 69.99,
				yearly: Math.round(49.99 * 12 * (1 - 0.12)),
			},
			features: [
				{ text: 'Feature 1' },
				{ text: 'Feature 2' },
				{ text: 'Feature 3' },
				{ text: 'Feature 4' },
				{
					text: 'Feature 5',
					tooltip: 'Add a helpful description for this feature',
				},
				{ text: 'Feature 6', tooltip: 'Add a helpful description for this feature' },
				{
					text: 'Feature 7',
					tooltip: 'Add a helpful description for this feature',
				},
			],
			btn: {
				text: 'Contact Sales',
				href: '#',
			},
		},
	];

	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4">
				<PricingSection
					plans={PLANS}
					heading="Your pricing section title here"
					description="Replace this with your pricing section description."
				/>
			</div>
		</section>
	);
};

export default Pricing;