import { useLayoutEffect, useRef, useCallback, memo, useEffect } from 'react';
import classnames from 'classnames';
import moduleStyle from './Collapse.module.scss';

export type CollapseProps = {
  show: boolean;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  as?: React.ComponentType;
};

const canUseDOM = typeof window !== 'undefined';
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

const Collapse: React.FC<CollapseProps> = (props: CollapseProps) => {
  const { show, children, className = '', as: Comp = 'div' } = props;

  const domRef = useRef<HTMLDivElement>(null);
  const inited = useRef(false);

  const doRender = useCallback((isOpen: boolean) => {
    const { current } = domRef;
    if (current) {
      const { scrollHeight, style } = current;
      current.style.willChange = 'max-height';
      const targetHeight = isOpen ? scrollHeight : 0;
      const dataShow = `${current.dataset.show}`;
      if (inited.current) {
        const targetHeightCSSVar = style.getPropertyValue('--target-height');
        if (targetHeightCSSVar === 'initial') {
          style.setProperty('--target-height', `${scrollHeight}px`);
          setTimeout(() => style.setProperty('--target-height', `${0}px`), 0);
        } else {
          style.setProperty('--target-height', `${targetHeight}px`);
        }
      } else if (dataShow === 'true') {
        style.setProperty('--target-height', 'initial');
      }
      inited.current = true;
    }
  }, []);

  const atTransitionEnd = useCallback(() => {
    if (domRef.current) {
      const dataShow = `${domRef.current.dataset.show}`;
      if (dataShow === 'true') {
        domRef.current.style.setProperty('--target-height', 'initial');
      }
      domRef.current.style.willChange = 'auto';
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    doRender(show);
  }, [show, doRender]);
  return (
    <Comp
      data-show={show}
      className={classnames(moduleStyle.collapseComponent, className)}
      ref={domRef}
      onTransitionEnd={atTransitionEnd}
    >
      {children}
    </Comp>
  );
};

export default memo(Collapse);
