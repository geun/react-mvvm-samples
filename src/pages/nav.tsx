import Link from 'next/link'

export function Nav() {
	return (
		<div>
			<ul>
				<li>
					<Link href={'/'}>MVVM</Link>
				</li>
				<li>
					<Link href={'/mvc'}>MVC</Link>
				</li>
				<li>
					<Link href={'/mvvmJS'}>MobX_js</Link>
				</li>
				<li>
					<Link href={'/mvvmTS'}>MobX_ts</Link>
				</li>
			</ul>
		</div>
	)
}
