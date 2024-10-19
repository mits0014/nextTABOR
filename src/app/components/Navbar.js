import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className={styles.Navbar}>
    <div className="pre-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-4">
                        <span>Entre em contato &nbsp;&nbsp;&nbsp;&nbsp;<img src = "icons/whatsapp.svg" alt="whatsapp svg" width={20}  height={20}/> &nbsp;45 99999-9999</span>
                    </div>
                    <div className="col-lg-5 col-sm-4"><li><a href="oracao.html">
                        <div className="pray">
                        <span> Pedido de oração</span>&nbsp;<Image width="20" height="20" src="/icons/pray.png" alt="pray"/>
                        </div>  
                    </a></li>
                    </div>
                    <div className="col-lg-2 col-sm-4">
                        <div className="text-button">
                            
                                <a href="https://www.instagram.com/comunidadecatolicatabor/">
                                <Image width="20" height="20" src="icons/instagram.svg"/></a>
                                &nbsp;&nbsp;  
                                <a href="https://www.facebook.com/taborconvivio?locale=pt_BR">
                                <Image width="20" height="20" src="icons/facebook.svg"/></a>
                                &nbsp;&nbsp;  
                                <a href="https://www.youtube.com/@comunidadecatolicatabor">
                                <Image width="20" height="20" src="icons/youtube.svg"/></a>
                                &nbsp;&nbsp;  
                                <a href="https://open.spotify.com/playlist/5RFfWVryk1JrTvPnWHCVZ0?si=a2d83a9f9ac44967"> 
                                <Image width="20" height="20" src="icons/spotify.svg"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                       
                            <a href="index.html" className="logo"><img height="60"  src="/images/logo.png"/></a>
                          
                            <ul className="nav">
                                <li><Link href ="/" className="active">Início</Link></li>
                                <li><Link href="/sobre"> Sobre</Link></li>
                                <li><Link href="/eventos"> Eventos</Link></li>
                                <li><Link href="/agenda"> Agenda</Link></li> 
                                <li><a href="taborao.html" className="taborao">Taborão <i className="bi bi-caret-down-fill"></i></a></li> 
                            </ul>        
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
      </div>
  )
}