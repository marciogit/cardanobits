
import { useState, useEffect } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import { bits } from './data';
import GlobalStyle, { AppWrapper } from './style';
import './fonts/bmd.css';

function App() {

	const bitsType = [
		{ type: 'zombie' },
		{ type: 'mummy' },
		{ type: 'robot' },
		{ type: 'shadow' },
		{ type: 'skeleton' },
		{ type: 'abomination' },
		{ type: 'alien' },
		{ type: 'human' },
	];

	const [ typeBit, setTypeBit ] = useState('human');

	const [isCopied, setIsCopied] = useState(false);

	const codeSnippet = `addr1qynsrt9yczlqy73w4xusjxpzarxq5zkfd53d4g7ywh3ezvwqzt8syszkyp3sqny6q67523yl82fcr2jpqnsmhnn436qqupryca`;

	const onCopyText = () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 12000);
	}, [])

	return (
		<>
			<GlobalStyle />
			<AppWrapper>
				<div className="header">
					<h1>Cardano Bits - Reference Guide</h1>
				</div>

				<div className="filters">
					Filter by category:
					{bitsType.map((types, i)=> (
						<button className={(types.type === typeBit ? 'active' : '')} onClick={()=> setTypeBit(`${types.type}`)}>{types.type}</button>
					))}
				</div>

				<div className="scroll-container">
					{loading === false ?
						<div className="bits-container">
						{bits.filter(name => name.properties[0].value === `${typeBit}`).map((bits, i)=> (
							<div className="scroll" key={i}>
								<p>{bits.name}</p>
								<span className={`${bits.properties[0].value}`}>{bits.properties[0].value} / {i+1}</span>
								<a href={"https://ipfs.blockfrost.dev/ipfs/" + `${bits.image}`} target="_blank" rel="noreferrer"><img src={`https://ipfs.blockfrost.dev/ipfs/${bits.image}`} alt=""/></a>

								<div className="tags">
									{bits.tags.map((features, i)=>(
										<span>{features}</span>
									))}
								</div>
							</div>
						))}
					</div>
					:
						<h3>There's heaps of bits to be loaded...<br/> grab a beer!</h3>
					}
				</div>


				<div className="beer">
					<div>
						<p><strong>If you think this guide is usefull, let's celebrate with a nice and cold beer boys: </strong>
						<CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
							<span>addr1...pryca {isCopied ? "Yesss I can taste it!" : <MdContentCopy />}</span>
						</CopyToClipboard>
						</p>
					</div>

					<div>
						<p><strong>Disclaimer:</strong> This guide is not officially realease by <a href="http://www.cardanobits.art" target="_blank" rel="noreferrer">CardanoBits</a>, the idea here is just
							to help the community while they're working really hard to deliver the top class bits for us. (I used the metada from each transaction on <a href="https://cardanoscan.io/tokens?pageNo=1&policyId=1131301ad4b3cb7deaddbc8f03f77189082a5738c0167e1772233097" target="_blank" rel="noreferrer">cardanoscan.io</a>)
						</p>
					</div>
				</div>

			</AppWrapper>
		</>
	);
}

export default App;
