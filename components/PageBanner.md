PageBanner Element:

```jsx
<PageBanner title="This is a Page Banner"/>
```

Alternate style
```jsx
<PageBanner title="This is a Page Banner" altStyle="true" secondayTitle="Secondary title"/>
```

Alternate style with call to action Button
```jsx
<PageBanner
  title="This is a Page Banner"
  altStyle="true"
  secondayTitle="Secondary title"
  ctaBtnText="Call to Action"
  ctaBtnAction={()=>{alert('click')}}
  />
```