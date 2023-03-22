import Link from 'next/link'

export function Nav() {
	return (
		<div className={'nav-wrapper'}>
			<ul>
				<li>
					<Link href={'/'}>MVVM</Link>
				</li>
				<li>
					<Link href={'/mvvm_mobx'}>MVVM With MobX</Link>
				</li>
				<li>
					<Link href={'/mvc'}>MVC</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link href={'/observer/makeObservable'}>makeObservable</Link>
				</li>
			</ul>
		</div>
	)
}
